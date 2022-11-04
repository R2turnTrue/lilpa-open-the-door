import { ReactNode } from 'react'

interface BaseProps {
    children?: ReactNode | undefined,
    isLilpaLive: boolean
}

export default function Base(props: BaseProps) {
    return (
        <div>
            <div className={`${props.isLilpaLive ? 'bg-on' : 'bg'} bg-base`}></div>
            <div className='main center'>
                {props.children}
            </div>
        </div>
    )
}