// ====== DONNÉES ======
let total = 25000;

let tranches = [
    { montant: 8500, paye: true },
    { montant: 8500, paye: true },
    { montant: 8000, paye: true }
];

// ====== CALCUL ======
let totalPaye = 0;

tranches.forEach(t => {
    if(t.paye){
        totalPaye += t.montant;
    }
});

let reste = total - totalPaye;
let pourcentage = (totalPaye / total) * 100;

// ====== AFFICHAGE ======
document.getElementById("paid").innerText = totalPaye.toLocaleString() + " DH";
document.getElementById("remaining").innerText = reste.toLocaleString() + " DH";
document.getElementById("percent").innerText = "~ " + Math.round(pourcentage) + "% complété";

document.getElementById("progressBar").style.width = pourcentage + "%";



function telecharger(file){
    const link = document.createElement("a");
    link.href = file;
    link.download = file;
    link.click();
}

if (reste === 0) {
    document.getElementById("successMessage").innerHTML =
        "🎉 Félicitations ! Tous les paiements universitaires ont été effectués.";
    document.getElementById("successMessage").style.color = "#16a34a";
    document.getElementById("successMessage").style.fontWeight = "bold";
    document.getElementById("successMessage").style.marginTop = "15px";
}