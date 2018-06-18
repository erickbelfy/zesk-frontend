import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import ErrorComponent from './common/ErrorComponent';
import RouteContainer from './RouteContainer';
import './RootComponent.css';

export class RootComponent extends ErrorComponent {
    render() {
        return (
            <main id="root">
                <section>
                    <Grid>
                        <RouteContainer />
                    </Grid>
                </section>
            </main>
        );
    }
}

export default RootComponent;
