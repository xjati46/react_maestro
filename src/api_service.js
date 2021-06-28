const TOKEN = 'fb5ec5875f75a4cb52f2a523a2f3be5c4451421d'

export default class API {

    // BERITA
    static updateBerita(token) {
        return fetch('http://127.0.0.1:8000/api/berita/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    // USER
    static daftarUser(token) {
        return fetch('http://127.0.0.1:8000/api/users/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    // PRODUK
    static daftarProduk(token) {
        return fetch('http://127.0.0.1:8000/api/produk/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static tambahProduk(body) {
        return fetch(`http://127.0.0.1:8000/api/produk/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusProduk(id_produk) {
        return fetch(`http://127.0.0.1:8000/api/produk/${id_produk}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${TOKEN}`
            }
        })
    };

    static ubahProduk(id_produk, body) {
        return fetch(`http://127.0.0.1:8000/api/produk/${id_produk}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    // PELATIH
    static daftarPelatih(token) {
        return fetch('http://127.0.0.1:8000/api/pelatih/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static tambahPelatih(body) {
        return fetch(`http://127.0.0.1:8000/api/pelatih/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusPelatih(id_pelatih) {
        return fetch(`http://127.0.0.1:8000/api/pelatih/${id_pelatih}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${TOKEN}`
            }
        })
    };

    static ubahPelatih(id_pelatih, body) {
        return fetch(`http://127.0.0.1:8000/api/pelatih/${id_pelatih}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    // SISWA
    static daftarSiswa(token) {
        return fetch('http://127.0.0.1:8000/api/siswa/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static tambahSiswa(body) {
        return fetch(`http://127.0.0.1:8000/api/siswa/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusSiswa(id_siswa) {
        return fetch(`http://127.0.0.1:8000/api/siswa/${id_siswa}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            }
          })
    };

    static ubahSiswa(id_siswa, body) {
        return fetch(`http://127.0.0.1:8000/api/siswa/${id_siswa}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    // PESANAN
    static daftarPesanan(token) {
        return fetch('http://127.0.0.1:8000/api/pesanan/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static tambahPesanan(body) {
        return fetch(`http://127.0.0.1:8000/api/pesanan/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusPesanan(id_pesanan) {
        return fetch(`http://127.0.0.1:8000/api/pesanan/${id_pesanan}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${TOKEN}`
            }
        })
    };

    static ubahPesanan(id_pesanan, body) {
        return fetch(`http://127.0.0.1:8000/api/pesanan/${id_pesanan}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    // static loginUser(body) {
    //     return fetch(`http://127.0.0.1:8000/auth/`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(body)
    //       }).then( resp => resp.json())
    // };
   
    // static registerUser(body) {
    //     return fetch(`http://127.0.0.1:8000/api/users/`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(body)
    //       }).then( resp => resp.json())
    // };
}
