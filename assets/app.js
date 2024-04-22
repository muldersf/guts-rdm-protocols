document.addEventListener('DOMContentLoaded', function() {
    var cohortATab = document.getElementById("cohort-a-tab");
    cohortATab.click(); 
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    document.addEventListener('DOMContentLoaded', function() {
        var firstTabLink = document.getElementById("cohort-a-tab");
        firstTabLink.style.opacity = "1";
    });

   
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.querySelectorAll('.slice-container').forEach(container => {
            if (!container.querySelector('a')) {
                container.style.opacity = "0.3";
            } else {
                container.style.opacity = "1";
            }
        });
    });
    
    document.getElementById(tabName).querySelectorAll('.circle').forEach(circle => {
        circle.style.backgroundColor = getComputedStyle(evt.target).getPropertyValue('--color-' + tabName);
        if (!circle.querySelector('a')) {
            circle.style.opacity = "0.3";
        } else {
            circle.style.opacity = "1";
        }
    });
    
    var hoveredElement = null;

    document.getElementById(tabName).addEventListener('mouseover', function(event) {
        var target = event.target;
        if (target.matches('.slice-container:hover #slice1') || 
            target.matches('.slice-container:hover #slice2') || 
            target.matches('.slice-container:hover #slice3') || 
            target.matches('.slice-container:hover #slice4') || 
            target.matches('.slice-container:hover #slice5') || 
            target.matches('.slice-container:hover #slice6') || 
            target.matches('body:has(.slice-container #slice-text-3:hover) #slice1') || 
            target.matches('body:has(.slice-container #slice-text-1:hover) #slice5') || 
            target.matches('body:has(.slice-container #slice-text-2:hover) #slice6') || 
            target.matches('body:has(.slice-container #slice-text-4:hover) #slice2') || 
            target.matches('body:has(.slice-container #slice-text-5:hover) #slice3') || 
            target.matches('body:has(.slice-container #slice-text-6:hover) #slice4')) {

            hoveredElement = target;
            hoveredElement.style.backgroundColor = getComputedStyle(evt.target).getPropertyValue('--color-' + tabName);
        }
    });

    document.getElementById(tabName).addEventListener('mouseout', function(event) {
        if (!event.relatedTarget || !event.relatedTarget.matches('.slice-container, .slice-text')) {
            if (hoveredElement && !hoveredElement.matches('.slice-text:hover')) {
                hoveredElement.style.backgroundColor = ''; 
                hoveredElement = null;
            }
        }
    });

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        tablinks[i].style.opacity = "0.6"; 
    }

    evt.currentTarget.style.opacity = "1";

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");

    
}


  