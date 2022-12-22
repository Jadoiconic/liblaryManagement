import React from 'react'
import myImage from '../../assets/86121130.jpg'

const Section = () => {
    return (
        <section className='mt-10 p-3 grid md:grid-cols-2 gap-2 bg-zinc-200'>
            <figure className="md:flex bg-slate-100 rounded-xl overflow-hidden p-8 md:p-0 dark:bg-zinc-500">
                <img className="w-24 md:max-h-[250px] h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={myImage} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis exercitationem facere eligendi impedit esse! Delectus eligendi ab harum repellendus nulla?
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-blue-900 dark:text-indigo-900">
                            Effx Gtan
                        </div>
                        <div className="text-slate-700 dark:text-white">
                            Software Engineer, Tumba
                        </div>
                    </figcaption>
                </div>
            </figure>
            <figure className="md:flex bg-slate-100 overflow-hidden rounded-xl p-8 md:p-0 dark:bg-zinc-500">
                <img className="w-24 h-24 md:w-48 md:h-auto md:max-h-[250px] md:rounded-none rounded-full mx-auto" src={myImage} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime ut optio qui expedita cupiditate, doloribus ab vel, quaerat culpa commodi. Nulla veritatis eius corrupti?
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-blue-900 dark:text-indigo-900">
                            Gabriel Akima
                        </div>
                        <div className="text-slate-700 dark:text-white">
                            Software Engineer, Tumba
                        </div>
                    </figcaption>
                </div>
            </figure>
        </section>
    )
}

export default Section