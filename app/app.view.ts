namespace $.$$ {
	export class $milis_ideag_app extends $.$milis_ideag_app {

		@$milis_log
		ideas() {
			return [ 'Инструменты', 'Фильтры', 'Нейросети' ]
		}

		add_idea() {
			this.new_idea('')
		}

		idea_list(): readonly ( any )[] {
			return this.ideas()
		}
		
	}
}
