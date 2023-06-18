function setupSidebar() {
	const sidebar = document.querySelector('.sidebar');
	const toggleSidebarBtns = document.querySelectorAll('.toggle-sidebar-btn');
	const sidebarBackdrop = document.querySelector('.sidebar-backdrop');

	function toggleSidebar() {
		if (sidebar.classList.contains('open')) {
			document.body.style.overflow = 'auto';
		} else {
			document.body.style.overflow = 'hidden';
		}

		sidebar.classList.toggle('open');
		sidebarBackdrop.classList.toggle('open');
	}

	sidebarBackdrop.addEventListener('click', toggleSidebar);
	toggleSidebarBtns.forEach((btn) =>
		btn.addEventListener('click', toggleSidebar)
	);
}

window.document.addEventListener('DOMContentLoaded', () => {
	setupSidebar();
});
