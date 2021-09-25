// import React from 'react';

const LINK = [
    {
        name: 'Home',
        link: '#',
    },
    {
        name: 'Shop',
        link: '#'
    },
    {
        name: 'Products',
        link: '#'
    },
    {
        name: 'Collection',
        link: '#'
    },
    {
        name: 'Carte(0)',
        link: '#'
    }
]

function NavBar() {
    return (
        <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="font-body uppercase text-green-50 dark:text-white font-black text-3xl">
                Fare Officiel
            </div>
            <div className="flex items-center">
                <nav className=" text-green-50 font-sanchez dark:text-white space-x-8 text-2xl lg:flex items-center hidden">
                    {LINK.map(({ name, link }) => {
                       return <a href={link} classname="py-2 px-6 flex">
                            {name}
                        </a>
                        })
                    }
                </nav>
                <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>

    );
}

export default NavBar;
