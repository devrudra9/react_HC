import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

    const [color, setColor] = useState('grey')

    return (
        <>
            <div
                className='w-full h-screen duration-200'
                style={{ backgroundColor: color }}
            >
                <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-xl'>
                        <Button
                            handleClick={() => setColor('grey')}
                            colour='grey'
                            btnName='Default'
                        />
                        <Button
                            handleClick={() => setColor('blue')}
                            colour='blue'
                            btnName='Blue'
                        />
                        <Button
                            handleClick={() => setColor('red')}
                            colour='red'
                            btnName='Red'
                        />
                        <Button
                            handleClick={() => setColor('green')}
                            colour='green'
                            btnName='Green'
                        />
                        <Button
                            handleClick={() => setColor('yellow')}
                            colour='yellow'
                            btnName='Yellow'
                        />
                        <Button
                            handleClick={() => setColor('magenta')}
                            colour='magenta'
                            btnName='Magenta'
                        />
                        <Button
                            handleClick={() => setColor('purple')}
                            colour='purple'
                            btnName='Purple'
                        />
                        <Button
                            handleClick={() => setColor('black')}
                            colour='black'
                            btnName='Black'
                        />
                        <Button
                            handleClick={() => setColor('pink')}
                            colour='pink'
                            btnName='Pink'
                        />
                        <Button
                            handleClick={() => setColor('orange')}
                            colour='orange'
                            btnName='Orange'
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default App
