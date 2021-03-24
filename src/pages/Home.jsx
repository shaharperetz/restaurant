import React from 'react'
import { Enjoyable } from '../components/Enjoyable'
import { Family } from '../components/Family'
import { Header } from '../components/Header'
import { HighLights } from '../components/HighLights'
import { MostLocally } from '../components/MostLocally'

export function Home() {
    return (
        <section >
            <Header />
            <Enjoyable />
            <MostLocally />
            <HighLights />
            <Family />
        </section>
    )
}
