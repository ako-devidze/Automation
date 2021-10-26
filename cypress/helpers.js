
function getElementsByTextContent(tag, text) {
    const results = Array.from(document.querySelectorAll(tag))
            .reduce((acc, el) => {
            if (el.textContent && el.textContent == text) {
                acc.push(el);
            }
            return acc;
            }, []);
    return results;
    }