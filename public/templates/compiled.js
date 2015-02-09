define(
	[
		'handlebars',
		'text!templates/table.html',
		'text!templates/row.html',
		'text!templates/editor.html',
		'text!templates/layout.html',
		'text!templates/node.html',
		'text!templates/navbar.html',
		'text!templates/panel.html',
		'text!templates/dianping.html',
		'text!templates/dashboard.html',
		'text!templates/business.html',
		'text!templates/page.html',
		'text!templates/signin.html',
		'text!templates/homepage.html',
		'text!templates/footer.html',
		'text!templates/products.html',
		'text!templates/marketing.html',
	],
	function(
		Handlebars,
		TableTpl,
		RowTpl,
		EditorTpl,
		LayoutTpl,
		NodeTpl,
		NavbarTpl,
		PanelTpl,
		DianpingTpl,
		DashboardTpl,
		BusinessTpl,
		PageTpl,
		SignInTpl,
		HomepageTpl,
		FooterTpl,
		ProductsTpl,
		MarketingTpl
	) {
		return {
			TableTemplate: Handlebars.compile(TableTpl),
			RowTemplate: Handlebars.compile(RowTpl),
			EditorTemplate: Handlebars.compile(EditorTpl),
			LayoutTemplate: Handlebars.compile(LayoutTpl),
			NodeTemplate: Handlebars.compile(NodeTpl),
			NavbarTemplate: Handlebars.compile(NavbarTpl),
			PanelTemplate: Handlebars.compile(PanelTpl),
			DianpingTemplate: Handlebars.compile(DianpingTpl),
			DashboardTemplate: Handlebars.compile(DashboardTpl),
			BusinessTemplate: Handlebars.compile(BusinessTpl),
			PageTemplate: Handlebars.compile(PageTpl),
			SignInTemplate: Handlebars.compile(SignInTpl),
			HomepageTemplate: Handlebars.compile(HomepageTpl),
			FooterTemplate: Handlebars.compile(FooterTpl),
			ProductsTemplate: Handlebars.compile(ProductsTpl),
			MarketingTemplate: Handlebars.compile(MarketingTpl),
		};
	}
);