import {ref,watchEffect} from 'vue'

const fetchData = (url) =>{
    const reviews = ref([])
    const error = ref(null)

        const loadData = async() => {
            try{
                const data = await fetch(url)
                if(!data.ok) throw new Error('Reviews are not available')
                reviews.value = await data.json()
                reviews.value = reviews.value.data
                console.log(reviews.value)
            }catch(err){
                error.value = err.message
                console.log(error.value)
            }
        }
        loadData()
        
    return {error,reviews}

}

export default fetchData
