import { createStore } from "vuex";
import axios from "axios"

const store = createStore({
    state() {
        return {
            villes: [
                { id: 1, city: "city test" }
            ],
            parkings: [
                { id: 1, name: "name test", type: "type test", city: "city test", cityId: 0, capacite: 0, user_id: 0 }
            ],
            user: {
                id: 0,
                useruser_typename: "testType"
            },
            ville: [
                { id: 1, city: "city test" }
            ],
            parkings2: [
                { id: 1, name: "name test", type: "type test", city: "city test", cityId: 0, capacite: 0, user_id: 0 }
            ]
        };
    },
    mutations: {
        addVille(state, villeData) {
            // villeData = JSON.parse(villeData)
            const id = villeData.id
            villeData = villeData.data
            const newVille = {
                id: id,
                titlte: villeData.title,
                body: villeData.body,
                // img: villeData.img
            }
            state.villes.unshift(newVille)
        },
        setVille(state, villeData) {
            state.villes = villeData
        },
        parkingsInCity(state, parksData) {
            state.parkings = parksData
        },
        login(state, logData) {
            state.user = logData
        },
        addRes(state, villeData) {
            // villeData = JSON.parse(villeData)
            const id = villeData.id
            villeData = villeData.data
            const newVille = {
                id: id,
                titlte: villeData.title,
                body: villeData.body,
                // img: villeData.img
            }
            state.ville.unshift(newVille)
        },
        parkings(state, parksData) {
            state.parkings2 = parksData
        },
        modPark1(data) {
            console.log(data)
        },
        addParking(data) {
            console.log(data)
        },
        logout(state, data) {
            state.user = null;
            console.log(data)
        }
    },
    actions: {
        addVille(context, villeData) {
            const data_to_send = JSON.stringify(villeData)
            axios.post("https://jsonplaceholder.typicode.com/posts", {
                data: data_to_send, headers: {
                    'Content-type': 'application/json: charset-UTF-8'
                }
            }).then(reponse => {
                context.commit("addVille", reponse.data)
            })
        },
        getData(context) {
            axios.get("http://raxk1131.odns.fr/city").then(reponse => {
                context.commit("setVille", reponse.data)
            })
        },
        getParkingsInCity(context, cityId) {
            axios.get("http://raxk1131.odns.fr/city/" + cityId + "/parkings").then(reponse => {
                context.commit("parkingsInCity", reponse.data)
            })
        },
        login(context, data) {
            const data_to_send = JSON.stringify(data)
            axios.post("http://raxk1131.odns.fr/login", {
                data: data_to_send, headers: {
                    'Content-type': 'application/json: charset-UTF-8'
                }
            }).then(reponse => {
                context.commit("login", reponse.data)
            })
        },
        reserver(context, resData) {
            const data_to_send = JSON.stringify(resData)
            axios.post("http://raxk1131.odns.fr/parkings/" + resData.id_park + "/reservations", {
                data: data_to_send, headers: {
                    'Content-type': 'application/json: charset-UTF-8'
                }
            }).then(reponse => {
                context.commit("addVille", reponse.data)
            })
        },
        deleteCity(context, cityId) {
            axios.delete("http://raxk1131.odns.fr/parkings/" + cityId).then(reponse => {
                context.commit("setVille", reponse.data)
            })
        },
        getParkings(context) {
            axios.get("http://raxk1131.odns.fr/parkings").then(reponse => {
                context.commit("parkings", reponse.data)
            })
        },
        modPark(context, modData) {
            const data_to_send = JSON.stringify(modData)
            axios.put("http://raxk1131.odns.fr/parkings/" + modData.id, {
                data: data_to_send, headers: {
                    'Content-type': 'application/json: charset-UTF-8'
                }
            }).then(reponse => {
                context.commit("modPark1", reponse.data)
            })
        },
        delPark(context, parkId) {
            axios.delete("http://raxk1131.odns.fr/parkings/" + parkId).then(reponse => {
                context.commit("modPark1", reponse.data)
            })
        },
        addPark(context, data) {
            const data_to_send = JSON.stringify(data)
            axios.post("http://raxk1131.odns.fr/parkings", {
                data: data_to_send, headers: { 'Content-type': 'application/json: charset-UTF-8' }
            }).then(reponse => {
                context.commit("addParking", reponse.data)
            })
        },
        logout(context, data){
            const data_to_send = JSON.stringify(data)
            axios.post("http://raxk1131.odns.fr/logout", {
                data: data_to_send, headers: { 'Content-type': 'application/json: charset-UTF-8' }
            }).then(reponse => {
                context.commit("logout", reponse.data)
            })
        }
    },
    getters: {
        villes(state) {
            return state.villes;
        },
        ville(state) {
            return (villeId) => {
                return state.villes.find((v) => v.id == villeId);
            }
        },
        parks(state) {
            return state.parkings;
        },
        parks2(state) {
            return state.parkings2;
        },
        park(state) {
            return (parkId) => {
                return state.parkings.find((p) => p.id == parkId);
            }
        },
        park2(state) {
            return (parkId) => {
                return state.parkings2.find((p) => p.id == parkId);
            }
        },
        user(state) {
            return state.user;
        }
    }
}
);

export default store;