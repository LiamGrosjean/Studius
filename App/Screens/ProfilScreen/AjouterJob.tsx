import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker, PickerItemProps } from '@react-native-picker/picker';

const AjouterJob = () => {
    const [ajoutjob, setAjoutjob] = useState('');
    const [ajoutjob_desc, setAjoutjobDesc] = useState('');
    const [ajoutjob_loc, setAjoutjobLoc] = useState('');
    const [ajoutjob_duree, setAjoutjobDuree] = useState('');
    const [ajoutjob_tarif, setAjoutjobTarif] = useState('');
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDk0ODE5NzksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbHQ3NDNzZG8wbWx3MDd1czJhcXZlbHZ1L21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LWFwLXNvdXRoZWFzdC0yLmh5Z3JhcGguY29tLyIsInN1YiI6IjA0YzZmYzM2LTdiNjYtNDdiYy04ZmFmLTc4YmU5YmM2NjNmZCIsImp0aSI6ImNsdGJwZmxkczBqc2kwNzJxZWdnejA0eW4ifQ.ZhbLRATjaBePjfjJYYUR6AaezWWDdKF4iQQEhA9KYRC77QwXHuH-SvTy72FNZngmjLxMdeFhHIQLvrC96FKEzei_kCy71KlHaKzfsJJDVHRI4hcxiTYufvlsLtb8baLhZLUKMUfV4XxY0WnFjGMJc0YGe4TVSonkgnNAOGtQEBQ__V30Fos8Sq8oHTEpGkCJfLkLfZX4i7DTnYk-S1jstP52dtxQSAle8D9JGdjuNZf6bbUNXpg7_85ltO-jN96DIImPVbr5bRLaL9kCmysyT1ewM8VhIJv_SYL_4sMVD_9GfG__2rMwbNtGC34GIED0Gqrzu2wvW832hYrRYp2DKi4egb7gwr26G-grEKKtuDl0wL3wL2O_zBk3Ky8lp5x7IVZv06sKpocq_70hBdGrsX82O0ZlapWuxk3-9Nzoy0WiMNyfrI-zrdkDpgllgjyi8gP3IkiwM53kcpPjWddSXrYxNB4egpIpOXjwVZHzlrCCtguDQxLLc6tASa1DL2eqhWZZv2lDFfJt4c29P2YiL9cQqKyyDjaooVfdw_jdGFDUbcK3jdlgpkstgfYlyDaDFdV9SlhM0m9T-Y-Qo9RtOr8wCAjY3SXIJuOEpyTuTz1gXG25iD3RzuP6XtP6YVsg1cZQPoybnVqD9Hlo-xrtzHnj2fcZuXu3Z-ZFdCrBlLo";

    const saveData = async () => {
        try {
            const result = await fetch("https://api-ap-southeast-2.hygraph.com/v2/clt743sdo0mlw07us2aqvelvu/master", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    query: `mutation {
                        createJob(
                            data: {
                                titre: "${ajoutjob}",
                                jobDescription: "${ajoutjob_desc}",
                                jobLocation: "${ajoutjob_loc}",
                                jobSalary: "${ajoutjob_tarif}",
                                jobHours: "${ajoutjob_duree}"
                            }) {
                                id
                            }
                        }`
                })
            });
            const data = await result.json();
            console.log(data); // Affichez les données retournées par l'API
            if (result.ok) {
                console.log("Le job a été ajouté");
            } else {
                console.error("Erreur lors de l'ajout du job:", data.error);
            }
        } catch (error) {
            console.error("Erreur lors de la requête:", error);
        }
    };

    return (
        <View>
            <Text>Ajouter un Job</Text>
            <TextInput
                placeholder="Entrer le nom du Job"
                value={ajoutjob}
                onChangeText={(text) => setAjoutjob(text)}
            />
            <TextInput
                placeholder="Entrer la description du Job"
                value={ajoutjob_desc}
                onChangeText={(text) => setAjoutjobDesc(text)}
            />
            <TextInput
                placeholder="Entrer la localisation du Job"
                value={ajoutjob_loc}
                onChangeText={(text) => setAjoutjobLoc(text)}
            />
            <Text>Catégorie</Text>
            <TextInput
                placeholder="Entrer la durée du Job"
                value={ajoutjob_duree}
                onChangeText={(text) => setAjoutjobDuree(text)}
            />
            <TextInput
                placeholder="Entrer le tarif horaire du Job"
                value={ajoutjob_tarif}
                onChangeText={(text) => setAjoutjobTarif(text)}
            />
            <Button title="Créer le Job" onPress={saveData} />
        </View>
    );
};

export default AjouterJob;
