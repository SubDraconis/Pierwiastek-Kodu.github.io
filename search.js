// Funkcja wywoływana przy każdym wpisaniu klawisza w pole wyszukiwania
function filterPosts() {
    // 1. Pobranie frazy wyszukiwania i konwersja na małe litery
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    
    // 2. Pobranie wszystkich elementów artykułów
    // Używamy #resultsContainer, aby upewnić się, że przeszukujemy tylko posty
    const posts = document.getElementById('resultsContainer').getElementsByClassName('post-item');
    
    // 3. Obsługa komunikatu "Nie znaleziono"
    const noResults = document.getElementById('noResults');
    let resultsFound = false;
    
    // 4. Pętla przez wszystkie artykuły
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        // Pobranie danych z niestandardowych atrybutów danych HTML5
        // Przeszukujemy tytuł i słowa kluczowe
        const title = post.getAttribute('data-title').toLowerCase();
        const keywords = post.getAttribute('data-keywords').toLowerCase();
        
        // 5. Sprawdzenie, czy fraza jest zawarta w tytułach LUB słowach kluczowych
        if (title.includes(filter) || keywords.includes(filter)) {
            // Fraza znaleziona: pokaż artykuł
            post.style.display = "block"; 
            resultsFound = true;
        } else {
            // Fraza nie znaleziona: ukryj artykuł
            post.style.display = "none";
        }
    }

    // 6. Pokazanie/Ukrycie komunikatu o braku wyników
    if (!resultsFound && filter.length > 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}