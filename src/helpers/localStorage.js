// Setter
export const setItemInLocalStorage = (itemName, itemValue) => {
    localStorage.setItem(itemName, itemValue);
};

// Getter
export const getItemFromLocalStorage = itemName => {
    return localStorage.getItem(itemName);
};

// Remover
export const removeItemFromLocalStorage = itemName => {
    localStorage.removeItem(itemName);
};

// Clearer
export const clearLocalStorage = () => {
    localStorage.clear();
};