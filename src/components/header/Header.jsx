import { Switch } from "@material-tailwind/react";

const Header = () => {
    return (
        <div className='mx-auto pt-16'>
            <div className='grid grid-col justify-items-center items-center'>
                <div className='w-4/5 pl-24'>
                    <Switch defaultChecked/>
                    <h1 className='text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark'>
                        Axel Brand new 
                        <span className ='text-dark font-petitFormal font-bold'> Furniture</span>{" "}
                        Mobile App
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Header;