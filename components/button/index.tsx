import "tailwindcss/tailwind.css"
import cn from 'classnames'

function Button(props: {mode: String, text: String, className? : String, bindclick?: ()=>void}) {
    
    return (
        <div className={cn('flex',
        'justify-center',
        'items-center',
        'text-sm',
        'text-white',
        'w-24',
        'h-12',
        'rounded-sm',
        'cursor-pointer',
        props.className,
        {
            ['bg-red-400']: props.mode === 'warning',
            ['bg-green-400']: props.mode === 'success'
        })}
        onClick={props.bindclick}
        >
            {props.text}
        </div>
    )
}

export default Button