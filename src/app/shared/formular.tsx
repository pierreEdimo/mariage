import * as React from 'react';
import {Button} from "@/app/shared/button";
import '@/app/styles/formular.css'

export const Formular = () => {
    return (
        <div className="card-container">
            <div className="card-container-inside">
                <form className="card-container-content">
                    <div className="mb-8">
                        <p className="text-4xl font-bold">Serez-vous présent ?</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <input type="text" placeholder="Votre Nom:*"/>
                        <input type="email" placeholder="Votre E-mail:*"/>
                        <div className="flex justify-between">
                            <label>
                                <input type="radio" name="attendance"/>
                                Oui, je serai présent
                            </label>
                            <label>
                                <input type="radio" name="attendance"/>
                                Désolé, je ne peux pas.
                            </label>
                        </div>
                        <select>
                            <option value="" disabled selected>Nombre d&apos;invités</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        <textarea rows={6} placeholder={"Message"}></textarea>
                    </div>
                    <div className={"mt-10"}>
                        <Button borderColor={"#d3d3d3"}>
                            Envoyer
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}