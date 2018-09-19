<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list 
            :cities="cities" 
            :hot="hotCities"
            :letter="letter"
        ></city-list>
        <city-alphabet 
            :cities="cities"
            @change="handleLetterChange"
        ></city-alphabet>
    </div>

</template>

<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    mounted (){
        this.getCityInfo()
    },
    data () {
        return {
            cities:{},
            hotCities:[],
            letter:'',
        }
    },
    methods: {
        getCityInfo(){
            axios.get('https://github.com/HabitatChen/travel-demo/tree/master/static/mock/city.json')
                .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res) {
            let response = res.data
            if (response.ret && response.data) {
                const data = response.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
}
</script>

<style scoped lang="stylus">

</style>


