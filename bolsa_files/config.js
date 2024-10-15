// CLARITY SCRIPT
        
(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "fq0u2k7b2a");

if (window.convert && window.convert.data.experiments) {
  var refObject = window.convert.data.experiments, key;
  
  for (key in window.convert.currentData.experiments) {
    if (window.convert.currentData.experiments.hasOwnProperty(key)) {
    var currentExperiment = window.convert.currentData.experiments[key];
    var curExperimentName = refObject[key] && refObject[key].n ? refObject[key].n : "unknown experiment name";
    curExperimentName = curExperimentName.replace("Test #", "Test ");
    var curVariant = currentExperiment.variation_name ? currentExperiment.variation_name : "unknown variant";
    curVariant = curVariant.replace("Var #", "Variation ");
    clarity("set", "Exp_Name", curExperimentName);
    clarity("set", "Var_Name", curVariant);
    }
  }
}