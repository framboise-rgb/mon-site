function toggleMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}
function toggleMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}
const SUPABASE_URL = "https://mosehsoxsandsnqfjqkt.supabase.co";

const SUPABASE_KEY = "sb_publishable_DZ3TBbSWU5OvujjlXFGzKA_Ab65gU1i";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name
                }
            }
        });

        if (error) {
            alert("Erreur : " + error.message);
            return;
        }

        alert("Compte créé ! Vérifie ton e-mail pour confirmer ton compte.");
    });
}