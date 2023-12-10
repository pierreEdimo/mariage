import {AppBar} from "@/app/shared/appbar";

export default function Home() {
    return (
        <main className="relative">
            <AppBar/>
            <section className="full-height w-full bg-gray-500">
                <div>
                    SAVE THE DATE
                </div>
            </section>
            <section className="slanded-section negative-margin">
                <div className="content-height m-auto w-2/3 flex items-center  skw">
                    <div className="w-1/2 text-black">
                        <p className="text-2xl font-bold">He asker her & she said yes!</p>
                        <br/>
                        <p>Phasellus a sapien tincidunt nunc dapibus mollis. Etiam ultricies bibendum sodales. Nulla
                            libero tortor, auctor at elit ut, pharetra placerat libero. Aenean gravida in libero sed
                            tincidunt. Nulla non mattis nisl, in imperdiet justo. Proin metus mauris, gravida vel ante
                            et, ornare laoreet libero sed ut quam vitae. Aenean aliquam augue turpis, in tempor elit
                            condimentum sit amet. Aenean aliquam augue turpis, in tempor elit condimentum sit amet.
                            Phasellus a sapien tincidunt nunc dapibus mollis. Etiam ultricies bibendum sodales.</p>
                    </div>
                    <div className=" w-1/3 image-height negative-margin bg-red-500">
                        <p>test</p>
                    </div>
                </div>
            </section>
            <section className="bg-gray-500 w-full negative-margin">
                <div className="m-auto w-2/3 py-24 standard-height">
                    <div className="h-full w-full flex items-center justify-center flex-col gap-20">
                        <h1 className="text-4xl text-white font-bold">We&apos;re getting married</h1>
                        <div className="custom-container">
                            <div className="inside-container">
                                <div className="container-content flex">
                                    <div
                                        className="flex-1 flex items-center flex-col justify-center bg-transparent text-white">
                                        <p className="font-bold text-8xl">Save</p>
                                        <p className="text-xl">THE</p>
                                        <p className="font-bold text-8xl">Date</p>
                                    </div>
                                    <div
                                        className="flex-1 transparent-color flex items-center flex-col justify-center top-border gap-12 text-white">
                                        <div className="flex flex-col gap-2 p-2">
                                            <p className="text-center"><span
                                                className="font-bold text-3xl">Franklin</span> & <span
                                                className="font-bold text-3xl">Vanessa</span></p>
                                            <p className="text-center">Request the honor of your presence on their
                                                wedding
                                                day</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="font-bold text-2xl">September 22, 2022</p>
                                            <p>at 03:00 pm</p>
                                        </div>
                                        <div className="text-center">
                                            <p>At Birchwood Church</p>
                                            <p>4181 Birchwood Ave Seal Beach, CA</p>
                                            <p>Reception to follow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-blue-400 py-24 w-full standard-height relative">
                <div className="w-2/3 m-auto">
                    <div className="w-full flex ">
                        <div className="flex-1 flex items-center text-white border-r-2 justify-center flex-col">
                            <p className="text-4xl font-bold">a</p>
                            <p className="text-3xl font-bold">Ceremony</p>
                            <p>03:00 PM - 04:00 PM</p>
                        </div>
                        <div className="flex-1 flex items-center text-white justify-center flex-col">
                            <p className="text-4xl font-bold" >h</p>
                            <p className="text-3xl font-bold">Photoshoot</p>
                            <p>05:00 PM - 06:30 PM</p>
                        </div>
                        <div className="flex-1 flex items-center text-white justify-center flex-col border-l-2">
                            <p className="text-4xl font-bold">b</p>
                            <p className="text-3xl font-bold">Reception</p>
                            <p>07:00 PM - 01:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className=" m-auto shadow-2xl p-6 bg-white card z-10 absolute flex items-center justify-center transform -translate-x-1/2  left-1/2">
                    <div className="card-container">
                        <div className="card-container-inside">
                            <form className="card-container-content">
                                <div className="mb-8">
                                    <p className="text-5xl font-bold">Will you attend?</p>
                                </div>
                                <div className="flex flex-col gap-4 w-full">
                                    <input type="text" placeholder="Your Name:*"/>
                                    <input type="email" placeholder="Your Email:*"/>
                                    <div className="flex justify-between">
                                        <label>
                                            <input type="radio" name="attendance"/>
                                            Yes, i will attend
                                        </label>
                                        <label>
                                            <input type="radio" name="attendance"/>
                                            Sorry, I can&apos;t come.
                                        </label>
                                    </div>
                                    <select>
                                        <option value="" disabled selected>Number of guests</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                    <div>
                                        <p>Meal Preferences</p>
                                        <div className="flex flex-col">
                                            <label>
                                                <input type={"checkbox"}/>
                                                Meat
                                            </label>
                                            <label>
                                                <input type={"checkbox"}/>
                                                Fish
                                            </label>
                                            <label>
                                                <input type={"checkbox"}/>
                                                Vegetarian
                                            </label>
                                            <label>
                                                <input type={"checkbox"}/>
                                                Gluten free
                                            </label>
                                        </div>
                                    </div>
                                    <textarea rows={6} placeholder={"Message"}></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slanded-section negative-margin bg-white standard-height">
                <p>test</p>
            </section>
        </main>
    )
}
