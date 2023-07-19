import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-3 border rounded-lg border-black p-4 w-80">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.23</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </p>
                <p className='flex gap-2 items-center'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 cursor-pointer text-black'></ChevronRightIcon>
                </p>
            </div>
        </div>
    )
}

export { OrdersCard }