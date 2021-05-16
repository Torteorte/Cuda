let contactsWithUs = document.createElement("li")
contactsWithUs.textContent = "Quick contacts"
contactsWithUs.style.cursor = "pointer"
contactsWithUs.style.borderTop = "solid 1px black"
ul.appendChild(contactsWithUs) // ul - список в другом js

function _createModal(options) {

    let modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
      <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">Modal title</span>
            <span class="modal-close">&times;</span>
          </div>
          <div class="modal-body" data-content>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    `)
    document.body.appendChild(modal)

    let title = document.querySelector(".modal-title");
    title.textContent = options.title || "";
  
    let contentText = document.querySelector(".modal-body");
    contentText.innerHTML = options.content;
  
    let modalWidth = document.querySelector(".modal-window")
    modalWidth.style.width = options.width || "400px";
    return modal
}

const $ = {}
// window.$ = $

$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    // let closing = false
  
    let modal = {
      open() {
        // !closing && 
        $modal.classList.add('opens')
      },
      close() {
        // closing = true
        $modal.classList.remove('opens')
        $modal.classList.add('hide')
        setTimeout(() => {
          $modal.classList.remove('hide')
        //   closing = false
        }, ANIMATION_SPEED)
      }
    }
    let listener = function(e) {
        let modalWindow = document.querySelector(".modal-window")
        let modalOverlay = document.querySelector(".modal-overlay")
        if ( event.target.className == 'modal-overlay' ||  event.target.className == 'modal-close') {
          modal.close()
        }
      }
      
    $modal.addEventListener('click', listener)

    return modal 
}

let modal = $.modal({
    title: "Contact with us",
    closable: true,
    content: `
        <ul>
            <li>Number: +38 (050) 746-51-30</li>
            <li>Gmail: <a href="mailto:lipstort@gmail.com" title="Junior Gmail">lipstort@gmail.com</a></li>
            <li>Telegram: <a href="https://web.telegram.org/#/im?p=@torteorte" title="Junior Telegram">@torteorte</a></li>
            <li>Instagram: alexlipssky</li>
        </ul>
    `,
    width: "400px" 
})

contactsWithUs.onclick = function() {
    modal.open()
}