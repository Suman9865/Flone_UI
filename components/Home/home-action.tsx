import React from 'react';
import { Button } from '../ui/button';

function HomeAction() {
    return(
     <div className="w-full mx-auto flex flex-col items-center justify-center py-20  py-14 gap-5 bg-blue-600 px-3 md:px-10">
        <h2 className="md:text-5xl text-3xl text-center text-white font-bold ">Feeling in love? Purchase Flone !</h2>
        <p className="text-center text-sm text-white md:text-base py-5">
        Impressive design, powerful features, and easy customization
        </p>
        <Button variant={"secondary"} className="shadow-sm shadow-slate-400 md:py-7 py-5 px-5">
          Purchase Now
        </Button>
     </div>
    )
}

export default HomeAction;