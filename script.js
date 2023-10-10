function criaCalc(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),



    inicia(){
        this.cliqueBtn()
        this.clearDisplay()
        this.clearOne()
        this.pressEnter()
    },

    cliqueBtn(){
        document.addEventListener('click', function(e){
             let el = e.target

             if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText)
             }
            
             if(el.classList.contains('btn-clear')){
                this.clearDisplay()
             }

             if(el.classList.contains('btn-del')){
                this.clearOne()
             }

             if(el.classList.contains('btn-igual')){
                this.result()
             }



        }.bind(this))

    },

    clearDisplay(){
        this.display.value = ''
    },

    clearOne(){
        this.display.value = this.display.value.slice(0, -1)
    },

    btnParaDisplay(valor){
        this.display.value += valor 
    },

    pressEnter(){
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.result()
            }
        })
    },

    result(){
         let conta = this.display.value

         try{
             conta = eval(conta)   

             if(!conta){
                alert('Conta Inválida')
                return
             }

             this.display.value = String(conta)
         } catch (e){
            alert('conta inválida')
         }

         
    }
    

}
}

let calc = criaCalc()
calc.inicia()