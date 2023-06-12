import React from 'react'
import classes from './LoginScreen.module.css'
import SelectionScreen from './SelectionScreen'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import LoginForm from './LoginForm'


const LoginScreen = () => {
    const selectionItems = useSelector(state => state.selection)
    const dispatch = useDispatch()
    const setSelection = id => {
        dispatch({ type: 'selection/select', payload: id })
    }
    return (
        <div className={classes.main_box}>
            <h2 className='capitalize text-primary text-2xl font-semibold'>choose account type</h2>
            <div className='flex sm:gap-5 gap-3 mt-5 '>
                {
                    selectionItems.map(item => {
                        return <SelectionScreen setSelection={setSelection} item={item} key={item.id} />
                    }
                    )
                }
            </div>
            <div className='sm:mt-10 mt-8'>
                <h6 className='sm:text-2xl text-xl text-gray-400 font-semibold'>
                    Hello! {selectionItems.find(item => item.selected).title} 
                </h6>
                <p className='sm:text-2xl text-xl text-gray-400 font-semibold' >
                Please fill the form below to get started
                </p>
            </div>
            <LoginForm />
            
        </div>
    )
}

export default LoginScreen
