document.addEventListener("DOMContentLoaded", function () {
    const groups = document.querySelectorAll(".group-title");

    groups.forEach(group => {
        group.addEventListener("click", function () {
            // Скрыть все подгруппы
            groups.forEach(otherGroup => {
                const subgroup = otherGroup.nextElementSibling;
                if (otherGroup !== group) {
                    subgroup.style.display = "none";
                }
            });

            // Переключить видимость текущей подгруппы
            const subgroup = this.nextElementSibling;
            subgroup.style.display = subgroup.style.display === "block" ? "none" : "block";
        });
    });
});
