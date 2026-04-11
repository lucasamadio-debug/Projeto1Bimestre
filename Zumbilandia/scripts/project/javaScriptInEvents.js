

const scriptsInEvents = {

	async Jogador_Event19_Act1(runtime, localVars)
	{
		if(runtime.globalVars.vidaplayer<= 0){
			runtime.goToLayout("primeiraFase");
		}
		// Verificando a variável global vidaplayer
		if (runtime.globalVars.vidaplayer <= 0) {
		    // Reinicia a vida para o próximo round antes de trocar
		    runtime.globalVars.vidaplayer = 3;
		    runtime.goToLayout("primeiraFase");
		}
	},

	async Zumbi1_Event6_Act1(runtime, localVars)
	{
		
		const inimigo = runtime.objects.zumbi1.getFirstPickedInstance();
		const bala = runtime.objects.tiro.getFirstPickedInstance();
		
		
		if (bala) bala.destroy();
		
		
		inimigo.instVars.VidaZumbi -= 1;
		
		
		if (inimigo.instVars.VidaZumbi <= 0) {
		    inimigo.setAnimation("morteMostro"); 
		    
		    
		    setTimeout(() => {
		        if (inimigo) inimigo.destroy();
		    }, 500); 
		}
	},

	async Jogador_Event20_Act1(runtime, localVars)
	{
		if(runtime.globalVars.vidaplayer<= 0){
			runtime.goToLayout("primeiraFase");
		}
		// Verificando a variável global vidaplayer
		if (runtime.globalVars.vidaplayer <= 0) {
		    // Reinicia a vida para o próximo round antes de trocar
		    runtime.globalVars.vidaplayer = 3;
		    runtime.goToLayout("primeiraFase");
		}
	},

	async Zumbi1_Event12_Act1(runtime, localVars)
	{
		
		const inimigo = runtime.objects.zumbi2.getFirstPickedInstance();
		const bala = runtime.objects.tiro.getFirstPickedInstance();
		
		
		if (bala) bala.destroy();
		
		
		inimigo.instVars.VidaZumbi2 -= 1;
		
		
		if (inimigo.instVars.VidaZumbi2 <= 0) {
		    inimigo.setAnimation("morteZumbi2"); 
		    
		    
		    setTimeout(() => {
		        if (inimigo) inimigo.destroy();
		    }, 500); 
		}
	},

	async Jogador_Event21_Act1(runtime, localVars)
	{
		if(runtime.globalVars.vidaplayer<= 0){
			runtime.goToLayout("primeiraFase");
		}
		// Verificando a variável global vidaplayer
		if (runtime.globalVars.vidaplayer <= 0) {
		    // Reinicia a vida para o próximo round antes de trocar
		    runtime.globalVars.vidaplayer = 3;
		    runtime.goToLayout("primeiraFase");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
