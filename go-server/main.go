package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func main() {

	http.Handle("/static/", http.FileServer(http.Dir("../build/")))
	http.Handle("/imagens/", http.FileServer(http.Dir("../build/")))

	// Serve arquivos soltos na raiz do build usando a mesma lógica segura
	http.Handle("/favicon.ico", http.FileServer(http.Dir("../build/")))
	http.Handle("/manifest.json", http.FileServer(http.Dir("../build/")))

	// http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("build/static"))))
	// http.Handle("/imagens/", http.StripPrefix("/imagens/", http.FileServer(http.Dir("build/imagens"))))

	templates := template.Must(template.ParseGlob("../build/index.html"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if err := templates.ExecuteTemplate(w, "index.html", nil); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	fmt.Println("Servidor ON")
	http.ListenAndServe(":8000", nil)
}
