import React from 'react'
import { BiCheck } from 'react-icons/bi'
const SelectionScreen = props => {
    const setSelectedItem = () => {
        props.setSelection(props.item.id)
    }
    return (
        <>
            <div onClick={setSelectedItem} className={`relative border cursor-pointer hover:border-primary ${ props.item.selected && 'border-primary'} rounded-lg basis-1/2 flex flex-col items-center justify-center p-4`}>
                <img src={props.item.image} alt='doctor' className='sm:w-40 w-25 ' />
                <h3 className='text-black text-2xl font-semibold'>{props.item.title}</h3>
                {props.item.selected &&
                    <div className='absolute bottom-[-10px] right-[-15px]'>
                        <BiCheck className='sm:text-3xl text-2xl  text-white bg-primary shadow-2xl rounded-full' />
                    </div>
                }
            </div>
        </>
    )
}

export default SelectionScreen;
