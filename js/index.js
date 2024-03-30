let nav = document.querySelector("#nav");
nav.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="/index.html"><i class="bi bi-cpu"></i></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/work.html">Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>`;
