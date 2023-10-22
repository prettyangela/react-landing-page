function Layanan() {
    return(
        <>
        <section id="layanan">
			<div className="tengah">
				<div className="kolom">
					<h2>Layanan Kami</h2>
				</div>

				<div className="layanan-list">
					<div className="kartu-layanan">
						<img src="src/assets/img/l1.png"/>
						<a href="#">
							<p>Tanya Dokter</p>
						</a>
					</div>

					<div className="kartu-layanan">
						<img src="src/assets/img/l2.png"/>
						<a href="#">
							<p>Temu Dokter</p>
						</a>
					</div>

					<div className="kartu-layanan">
						<img src="src/assets/img/l3.png"/>
						<a href="#">
							<p>Info Obat</p>
						</a>
					</div>

					<div className="kartu-layanan">
						<img src="src/assets/img/l4.png" />
						<a href="#">
							<p>Kalkulator BMI</p>
						</a>
					</div>

					<div className="kartu-layanan">
						<img src="src/assets/img/l5.jpg"/>
						<a href="#">
							<p>Kalkulator Kehamilan</p>
						</a>
						
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default Layanan