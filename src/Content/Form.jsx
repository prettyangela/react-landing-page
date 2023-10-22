function Form() {
    return(
        <>
        <section id="register">
			<div class="tengah">
				<div class="kolom">
					<h2>Register</h2>
					<p>Yuk daftarkan dirimu sekarang juga.</p>
				</div>
			
				<form class="form">
							<p>Nama: </p>
					        <input id="name" type="text"/>
					        <p>Kota: </p>
					        <input id="city" type="text"/>
					        <p>Email: </p>
					        <input id="email" type="email"/>
					        <p>Kode Pos: </p>
					        <input id="zip-code" type="number"/>
					        <label id="check">Dengan ini saya menyatakan data yang diisi pada form ini adalah benar dan telah sesuai</label>
					        <input id="status" type="checkbox"/>
					        <button id="submit-form" type="submit">Submit</button>
					        <div id="warning"></div>
				</form>
			</div>
		</section>
        </>
    )
}

export default Form