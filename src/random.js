let arr = ['zhibek', 'ardak'];

const map = (strelka) => {
    for (const val in arr) {
        strelka(val);
    }
}

map((item) => (console.log(item)));