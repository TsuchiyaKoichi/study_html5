(function() {
	var $links = document.getElementById( 'links' ),
		$replace = document.getElementById( 'replace' ),
	    $historyCount = document.getElementById( 'historyCount' );

	updateHistoryCount();

	function updateHistoryCount() {
		$historyCount.textContent = history.length;
	}

	// リンククリックイベント
	$links.addEventListener( 'click', function (e) {
		e.preventDefault();

		// リンクがクリックされたときはpushStateして履歴数を更新
		if(e.target.tagName === 'A') {
			var obj = { id: 1, name: 'sample', url: e.target.href };
			history.pushState(obj, null, e.target.href);
			updateHistoryCount();
		}
	});

	// Replaceボタンクリックイベント
	$replace.addEventListener( 'click', function (e) {
		var obj = { id: 2, name: 'replace', url: '#link4' };
		history.replaceState(obj, null, '#link4');
	});

	// 履歴やハッシュでページ内遷移発生イベント
	window.addEventListener( 'popstate', function (e) {
		console.log(e);
		console.log(history.state);
	});
}());