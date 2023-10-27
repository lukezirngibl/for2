import { useEffect, useState } from 'react'

import track from './assets/track-1.svg'
import base from './assets/whole-park-base.svg'

import skatePark from './assets/skate-park.svg'
import skateParkInside from './assets/skatebark-inside.svg'

import amp1 from './assets/amphi-base.svg'

import tower from './assets/tower.svg'

import picnicArea from './assets/picnic-area.svg'

import river1 from './assets/river-1.svg'
import river2 from './assets/river-2.svg'
import river3 from './assets/river-3.svg'
import riverBase from './assets/river-base.svg'
import waterfall from './assets/waterfall.svg'

import bigKiosk from './assets/big-kiosk.svg'
import roseKiosk from './assets/rose-kiosk.svg'
import greenhouse from './assets/greenhouse.svg'

import './App.css'

function App() {
  const [isOn, setIsOn] = useState(true)

  const [phase, setPhase] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((v) => (v === 7 ? 1 : v + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const hours = new Date().getHours()
      const minutes = new Date().getMinutes()
      if (isOn && hours >= 23) {
        setIsOn(false)
      } else if (!isOn && hours >= 11 && minutes >= 30) {
        setIsOn(true)
        getDayData()
      }
    }, 60 * 30 * 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isOn])

  if (!isOn) {
    return <div />
  }

  const renderText = (style, text) => (
    <p
      style={{
        position: 'fixed',
        fontFamily: 'Arial',
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
        zIndex: 1000,
        ...style,
      }}
    >
      {text}
    </p>
  )

  return (
    <>
      {phase === 1 && (
        <>
          {renderText(
            {
              bottom: 690,
              left: 925,
              transform: 'rotate(180deg)',
            },
            'Outdoor Track (300m)',
          )}

          <img
            src={track}
            style={{
              width: 570,
              position: 'fixed',
              transform: 'skew(0deg)',
              bottom: 430,
              left: 825,
              opacity: 1,
              zIndex: 103,
            }}
            alt="React logo"
          />
        </>
      )}

      {phase === 2 && (
        <>
          {renderText(
            {
              bottom: 670,
              left: 110,
              transform: 'rotate(180deg)',
            },
            'Urban Skatepark',
          )}

          <img
            src={skateParkInside}
            style={{
              width: 496,
              position: 'fixed',
              transform: 'skew(0deg) rotate(1deg)',
              bottom: 432,
              left: 160,
              zIndex: 103,
            }}
            alt="React logo"
          />

          <img
            src={skatePark}
            style={{
              width: 496,
              position: 'fixed',
              transform: 'skew(0deg) rotate(1deg)',
              bottom: 445,
              left: 110,
              zIndex: 103,
            }}
            alt="React logo"
          />
        </>
      )}

      {phase === 3 && (
        <>
          {renderText(
            {
              bottom: 0,
              left: 600,
              transform: 'rotate(0deg)',
              fontSize: 40,
            },
            'Public Ampitheater',
          )}

          <img
            src={amp1}
            style={{
              width: 505,
              position: 'fixed',
              transform: 'skew(0deg) rotate(-4deg)',
              bottom: -65,
              left: 148,
              zIndex: 103,
            }}
            alt="React logo"
          />
        </>
      )}

      {phase === 4 && (
        <>
          {renderText(
            {
              bottom: 70,
              left: 80,
              transform: 'rotate(0deg)',
              fontSize: 40,
            },
            'Tower',
          )}

          <img
            src={tower}
            style={{
              width: 505,
              position: 'fixed',
              transform: 'skew(0deg) rotate(0deg)',
              bottom: 182,
              left: -55,
              zIndex: 103,
            }}
            alt="React logo"
          />
        </>
      )}

      {phase === 5 && (
        <>
          {renderText(
            {
              bottom: 300,
              left: 400,
              transform: 'rotate(0deg)',
              fontSize: 40,
            },
            'Picnic Area',
          )}

          <img
            src={picnicArea}
            style={{
              width: 500,
              position: 'fixed',
              transform: 'skew(0deg) rotate(1deg)',
              bottom: 147,
              left: 144,
              zIndex: 103,
            }}
            alt="React logo"
          />
        </>
      )}

      {phase === 6 && (
        <>
          {renderText(
            {
              bottom: 100,
              right: 760,
              transform: 'rotate(0deg)',
              fontSize: 40,
            },
            'Waterfall',
          )}

          <img
            src={waterfall}
            style={{
              width: 500,
              position: 'fixed',
              transform: 'skew(0deg) rotate(-2deg)',
              bottom: -50,
              right: 432,
              zIndex: 103,
            }}
            alt="React logo"
          />

          <img
            src={river1}
            style={{
              width: 1000,
              position: 'fixed',
              transform: 'skew(0deg) rotate(-2deg)',
              bottom: -80,
              right: -267,
              zIndex: 103,
            }}
            alt="React logo"
          />

          <img
            src={riverBase}
            style={{
              width: 500,
              position: 'fixed',
              transform: 'skew(0deg) rotate(0deg)',
              bottom: -2,
              right: 350,
              zIndex: 103,
            }}
            alt="React logo"
          />

          <img
            src={river2}
            style={{
              width: 1000,
              position: 'fixed',
              transform: 'skew(0deg) rotate(-2deg)',
              bottom: -135,
              right: -165,
              zIndex: 103,
            }}
            alt="React logo"
          />

          <img
            src={river3}
            style={{
              width: 1000,
              position: 'fixed',
              transform: 'skew(0deg) rotate(-2deg)',
              bottom: 2,
              right: -500,
              zIndex: 103,
            }}
            alt="React logo"
          />
        </>
      )}

      {phase === 7 && (
        <>
          {renderText(
            {
              bottom: 550,
              right: 280,
              transform: 'rotate(180deg)',
              fontSize: 24,
            },
            'Rose Garden',
          )}

          <img
            src={greenhouse}
            style={{
              width: 100,
              position: 'fixed',
              transform: 'skew(0deg) rotate(0deg)',
              bottom: 652,
              right: 499.5,
              zIndex: 103,
            }}
            alt="React logo"
          />

          <img
            src={bigKiosk}
            style={{
              width: 140,
              position: 'fixed',
              transform: 'skew(0deg) rotate(15deg)',
              bottom: 550,
              right: 402,
              zIndex: 103,
            }}
            alt="React logo"
          />

          <img
            src={roseKiosk}
            style={{
              width: 110,
              position: 'fixed',
              transform: 'skew(0deg) rotate(1deg)',
              bottom: 613,
              right: 349,
              zIndex: 103,
            }}
            alt="React logo"
          />
        </>
      )}

      <img
        src={base}
        className="fade"
        style={{
          width: 2270,
          position: 'fixed',
          transform: 'skew(2deg)',
          bottom: -280,
          left: -170,
        }}
        alt="React logo"
      />

      {/* <img
        src={riverBig}
        style={{
          width: 497,
          position: 'fixed',
          bottom: 19,
          left: 1078,
          zIndex: 100,
        }}
        alt="React logo"
      /> */}
    </>
  )
}

export default App
