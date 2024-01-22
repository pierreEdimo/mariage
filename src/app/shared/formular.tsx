"use client"

import * as React from 'react';
import {Button} from "@/app/shared/button";
import '@/app/styles/formular.css'


interface EmailForm {
    email: string;
    name: string;
    attendance: string;
    message: string;
    invitee: string;
}

type sendingForm = {
    to: string;
    subject: string;
    body: string;
}

export const Formular = () => {
    const sendEmail = async (event: any) => {
        event.preventDefault();
        const data: EmailForm = {
            email: event.target.email.value,
            attendance: event.target.attendance.value,
            name: event.target.name.value,
            message: event.target.message.value ? event.target.message.value : "aucuns messages",
            invitee: event.target.invitee.value ? event.target.invitee.value : "0"
        };

        try {
            await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({text: data}),
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }

    }

    return (
        <div className="card-container">
            <div className="card-container-inside">
                <form onSubmit={sendEmail} className="card-container-content">
                    <div className="mb-8">
                        <p className="text-4xl font-bold">Serez-vous présent ?</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <input name={"name"} type="text" placeholder="Votre Nom:*" required/>
                        <input name={"email"} type="email" placeholder="Votre E-mail:*" required/>
                        <div className="flex justify-between">
                            <label>
                                <input type="radio"  value={"oui, je serai present"} name="attendance" required/>
                                Oui, je serai présent
                            </label>
                            <label>
                                <input type="radio" value={"non, je ne pourrai pas"} name="attendance" required/>
                                Désolé, je ne peux pas.
                            </label>
                        </div>
                        <select defaultValue={""} name={"invitee"}>
                            <option value="" disabled> Nombre d&apos;invités</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        <textarea name={"message"} rows={6} placeholder={"Message"}></textarea>
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