import { useEffect, useState } from 'react';
import TableSummary from '../components/tables/TableSummary';
import SearchBar from '../components/SearchBar';
import { useSnackbar } from 'notistack';
import { Button, Col, Container, Row } from 'react-bootstrap';

import FormConfirm from '../components/forms/FormConfirm';
import FormVisitors from '../components/forms/FormVisitors';

import VisitorService from '../services/visitor.service';
import { Autocomplete, TextField } from '@mui/material';

export default function Summary() {

    const [visitors, setVisitors] = useState([]);
    const [results, setResults] = useState([]);

    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);

    const [months, setMonths] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(null);

    const [showConfirm, setShowConfirm] = useState(false);
    const [action, setAction] = useState({});

    const [update, setUpdate] = useState(true);

    const { enqueueSnackbar } = useSnackbar();

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const handleChangeYear = async(event, year) => {

        setVisitors([])
        setResults([])

        if(year === '' || year === null) return

        try {
            const month = await VisitorService.getMonth(year)
            setSelectedYear(year)
            setMonths(month)
        } catch (errorMessage) {
            enqueueSnackbar(errorMessage, {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }
            })
        }
    }

    const handleChangeMonth = async(event, month) => {

        setVisitors([])
        setResults([])

        if(month === '' || month === null) return

        try {
            setSelectedMonth(month)
        } catch (errorMessage) {
            enqueueSnackbar(errorMessage, {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }
            })
        }
    }

    const onSubmit = async() => {

        try {
            const visitors = await VisitorService.findBySummary(selectedYear, selectedMonth)
            console.log('visitors', visitors)
            setVisitors(visitors)
            setResults(visitors)
        } catch (error) {
            enqueueSnackbar(errorMessage, {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }
            })
        }

    }

    useEffect(() => {

        (async () => {
            try {
                const years = await VisitorService.getYears()
                setYears(years)
            } catch (errorMessage) {
                enqueueSnackbar(errorMessage, {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                    }
                })
            }
        })()

    }, [update])

    return (

        <div id="content" className="bg-grey w-100">

            <section className="bg-light py-3">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-9 col-md-8">
                            <h1 className="font-weight-bold mb-0">Informe</h1>
                            <p className="lead text-muted">Revisa la última información</p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="bg-mix py-3">

                <div className="container">

                    <div className="card rounded-0">

                        <div className="card-body">

                            <div className="row">

                                <FormConfirm
                                    showConfirm={showConfirm}
                                    setShowConfirm={setShowConfirm}
                                    action={action}
                                    setAction={setAction}
                                    setUpdate={setUpdate}
                                    update={update}
                                />

                                <div className="col-lg-3 col-md-6 stat my-3 d-flex">


                                    <div className="mx-auto d-flex w-100 justify-content-center align-items-center">

                                        <Autocomplete
                                            disablePortal
                                            options={years}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Año" />}
                                            onChange={handleChangeYear}
                                        />

                                    </div>

                                </div>

                                <div className="col-lg-3 col-md-6 stat my-3 d-flex">


                                    <div className="mx-auto d-flex w-100 justify-content-center align-items-center">

                                        <Autocomplete
                                            disablePortal
                                            options={months}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Mes" />}
                                            onChange={handleChangeMonth}
                                        />

                                    </div>

                                </div>
                                
                                <div className="col-lg-3 col-md-6 stat my-3 d-flex">


                                    <div className="mx-auto d-flex w-100 justify-content-center align-items-center">

                                        <Button
                                            type="button"
                                            variant="primary"
                                            className="btn w-75 h-100 fs-4"
                                            onClick={onSubmit}
                                        >
                                            Buscar
                                        </Button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section>

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 my-3">

                            <div className="card rounded-0">

                                <div className="card-header bg-light">

                                    <h3 className="h6 fw-bold mb-0">Visitantes ({results && results.length})</h3>

                                </div>

                                <div>

                                    <SearchBar
                                        data={visitors}
                                        setResults={setResults}
                                        propertyName='last_name'
                                    />

                                </div>

                                <div className="card-header">

                                    <TableSummary
                                        visitors={results}
                                        formConfirm={{
                                            setShowConfirm: setShowConfirm,
                                            setAction: setAction
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    )
}