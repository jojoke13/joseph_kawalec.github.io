/*
Auteur : Morgan BRASSEUR Anthony PROVINI 
Durée du stage : du 25 mai 2010 au 2 juillet 2010

Fonctions javascript
*/

//Cette fonction sert à chaque chargement de page (appelé lors du onload de la page dans la balise body), à placer automatiquement le curseur dans la barre de texte
function donner_focus(chaine_id)   
{
	document.getElementById(chaine_id).focus();
}

function verifs(chaine_id_input)
{
	if(document.getElementById(chaine_id_input).value.length > 38) //Vérification du nombre de caractères tapés (si supérieur à 38 => erreur)
	{ 
		alert ('La recherche que vous venez d\'effectuer contient trop de caractères ! Veuillez recommencer.'); 
		return false; 
	}
	else if(document.getElementById(chaine_id_input).value.length == 0) //Si c'est vide, même chose.
	{ 
		alert ('Le champ de recherche est vide ! Veuillez taper un mot ou une expression dans le champ approprié.'); 
		return false; 
	}
	return true;
}

$(document).ready(function(){$('#zonetexte').focus().autocomplete('/des/autocompletion.php',{matchSubset: false, matchCase: true, max: 9, delay: 100, selectFirst: false});});


