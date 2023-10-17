const Currentdate = new Date()
// const CurrentYear = Currentdate.getFullYear()
// const CurrentMonth = Currentdate.getDate() + 1
// const CurrentDay = Currentdate.getDay()
const yearoutput = document.querySelector('.output-year')
const monthoutput = document.querySelector('.output-Month')
const dayoutput = document.querySelector('.output-day')
const button = document.querySelector('.btn')



// class Age {
//     constructor(day,month,year){
//         this.day = day
//         this.month = month
//         this.year = year
//     }
//     CalAge(){
//          age = CurrentYear - this.year
//         if(CurrentMonth<this.month || (CurrentMonth == this.month && CurrentDay>this.day)){age--}
//         return age
//     }
// }

button.addEventListener('click',function(){
    const dayin = parseInt(document.getElementById('day').value)
const monthin = parseInt(document.getElementById('month').value)
const yearin = parseInt(document.getElementById('year').value)
 const aged = new Date(`${dayin}-${monthin}-${yearin}`)
  const agediff = new Date.now() - aged 
  const ageDate = new Date(agediff)
  const ageYears = ageDate.getFullYear()
  const ageMonth = ageDate.getMonth()
  const ageDay = ageDate.getDay()
  yearoutput.textContent = ageYears
  monthoutput.textContent = ageMonth
  dayoutput.textContent = ageDay

})
// const calculatedage=   aged.CalAge()
