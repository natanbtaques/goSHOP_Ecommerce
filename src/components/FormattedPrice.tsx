import React from 'react'
interface Props {
    amount: number
}

const FormattedPrice = ({ amount }: Props) => {
    const FormattedAmount = new Number(amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
    return (
        <span>
            {FormattedAmount}
        </span>
    )
}

export default FormattedPrice

