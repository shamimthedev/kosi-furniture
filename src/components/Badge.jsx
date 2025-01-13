import React from 'react'

const Badge = ({ badgeText, className }) => {
    return (
        <div className={`${className} w-[46px] h-[28px] text-white`}>
            <p className="text-center">{badgeText}</p>
        </div>
    )
}

export default Badge