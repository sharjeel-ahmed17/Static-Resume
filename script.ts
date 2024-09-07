const toggleButton = document.getElementById(
  "toggleSkillsBtn"
) as HTMLButtonElement | null;
const skillsSection = document.getElementById("skills") as HTMLElement | null;

toggleButton?.addEventListener("click", () => {
  if (skillsSection?.style.display === "none") {
    skillsSection.style.display = "block";
  } else {
    skillsSection!.style.display = "none";
  }
});
