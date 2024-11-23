const onServicesDocumentReady = () => {
    document.querySelector('.code').addEventListener('click', () => {
        showServiceDetails('code');
    });
    
    document.querySelector('.video').addEventListener('click', () => {
        showServiceDetails('video');
    });
    
    document.querySelector('.design').addEventListener('click', () => {
        showServiceDetails('design');
    });

    document.querySelector('.mathml').addEventListener('click', () => {
        showServiceDetails('mathml');
    });

    document.querySelectorAll('.arrow-div i').forEach(arrow => {
        arrow.addEventListener('click', () => {
            document.querySelector('.services-section').classList.remove('hidden');
            document.querySelectorAll('.service-details').forEach(block => {
                block.classList.add('hidden');
            });
        });
    });
}

function showServiceDetails(selector) {
    document.querySelectorAll('.service-details').forEach(block => {
        if (block.id !== selector && !block.classList.contains("hidden")) {
            block.classList.add("hidden")
        }
    });

    document.querySelector(`.services-section`).classList.add('hidden');
    document.querySelector(`#${selector}`).classList.remove('hidden');
}  