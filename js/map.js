var map = L.map("map", {
	zoomControl: true,
	maxZoom: 28,
	minZoom: 1,
}).fitBounds([
	[-8.132094864036565, 110.03742245800932],
	[-7.285439770438552, 110.90769888879026],
]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix(
	'<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>'
);
var autolinker = new Autolinker({
	truncate: { length: 30, location: "smart" },
});
function removeEmptyRowsFromPopupContent(content, feature) {
	var tempDiv = document.createElement("div");
	tempDiv.innerHTML = content;
	var rows = tempDiv.querySelectorAll("tr");
	for (var i = 0; i < rows.length; i++) {
		var td = rows[i].querySelector("td.visible-with-data");
		var key = td ? td.id : "";
		if (
			td &&
			td.classList.contains("visible-with-data") &&
			feature.properties[key] == null
		) {
			rows[i].parentNode.removeChild(rows[i]);
		}
	}
	return tempDiv.innerHTML;
}
document.querySelector(".leaflet-popup-pane").addEventListener(
	"load",
	function (event) {
		var tagName = event.target.tagName,
			popup = map._popup;
		// Also check if flag is already set.
		if (tagName === "IMG" && popup && !popup._updated) {
			popup._updated = true; // Set flag to prevent looping.
			popup.update();
		}
	},
	true
);
var bounds_group = new L.featureGroup([]);
function setBounds() {}
map.createPane("pane_OSMStandard_0");
map.getPane("pane_OSMStandard_0").style.zIndex = 400;
var layer_OSMStandard_0 = L.tileLayer(
	"http://tile.openstreetmap.org/{z}/{x}/{y}.png",
	{
		pane: "pane_OSMStandard_0",
		opacity: 1.0,
		attribution:
			'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
		minZoom: 1,
		maxZoom: 28,
		minNativeZoom: 0,
		maxNativeZoom: 19,
	}
);
layer_OSMStandard_0;
map.addLayer(layer_OSMStandard_0);
function pop_DesaSleman_1(feature, layer) {
	var popupContent =
		'<table>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KDPPUM"] !== null
			? autolinker.link(feature.properties["KDPPUM"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' +
		(feature.properties["NAMOBJ"] !== null
			? autolinker.link(feature.properties["NAMOBJ"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["REMARK"] !== null
			? autolinker.link(feature.properties["REMARK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KDPBPS"] !== null
			? autolinker.link(feature.properties["KDPBPS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FCODE"] !== null
			? autolinker.link(feature.properties["FCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LUASWH"] !== null
			? autolinker.link(feature.properties["LUASWH"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["UUPP"] !== null
			? autolinker.link(feature.properties["UUPP"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SRS_ID"] !== null
			? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LCODE"] !== null
			? autolinker.link(feature.properties["LCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["METADATA"] !== null
			? autolinker.link(feature.properties["METADATA"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KDEBPS"] !== null
			? autolinker.link(feature.properties["KDEBPS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KDEPUM"] !== null
			? autolinker.link(feature.properties["KDEPUM"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KDCBPS"] !== null
			? autolinker.link(feature.properties["KDCBPS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KDCPUM"] !== null
			? autolinker.link(feature.properties["KDCPUM"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KDBBPS"] !== null
			? autolinker.link(feature.properties["KDBBPS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KDBPUM"] !== null
			? autolinker.link(feature.properties["KDBPUM"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WADMKD"] !== null
			? autolinker.link(feature.properties["WADMKD"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WIADKD"] !== null
			? autolinker.link(feature.properties["WIADKD"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WADMKC"] !== null
			? autolinker.link(feature.properties["WADMKC"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WIADKC"] !== null
			? autolinker.link(feature.properties["WIADKC"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WADMKK"] !== null
			? autolinker.link(feature.properties["WADMKK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WIADKK"] !== null
			? autolinker.link(feature.properties["WIADKK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WADMPR"] !== null
			? autolinker.link(feature.properties["WADMPR"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WIADPR"] !== null
			? autolinker.link(feature.properties["WIADPR"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["TIPADM"] !== null
			? autolinker.link(feature.properties["TIPADM"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SHAPE_Leng"] !== null
			? autolinker.link(feature.properties["SHAPE_Leng"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SHAPE_Area"] !== null
			? autolinker.link(feature.properties["SHAPE_Area"].toLocaleString())
			: "") +
		"</td>\
                    </tr>\
                </table>";
	layer.bindPopup(popupContent, { maxHeight: 400 });
	var popup = layer.getPopup();
	var content = popup.getContent();
	var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
	popup.setContent(updatedContent);
}

function style_DesaSleman_1_0() {
	return {
		pane: "pane_DesaSleman_1",
		opacity: 1,
		color: "rgba(35,35,35,1.0)",
		dashArray: "",
		lineCap: "butt",
		lineJoin: "miter",
		weight: 1.0,
		fill: true,
		fillOpacity: 1,
		fillColor: "rgba(51,160,44,1.0)",
		interactive: true,
	};
}
map.createPane("pane_DesaSleman_1");
map.getPane("pane_DesaSleman_1").style.zIndex = 401;
map.getPane("pane_DesaSleman_1").style["mix-blend-mode"] = "normal";
var layer_DesaSleman_1 = new L.geoJson(json_DesaSleman_1, {
	attribution: "",
	interactive: true,
	dataVar: "json_DesaSleman_1",
	layerName: "layer_DesaSleman_1",
	pane: "pane_DesaSleman_1",
	onEachFeature: pop_DesaSleman_1,
	style: style_DesaSleman_1_0,
});
bounds_group.addLayer(layer_DesaSleman_1);
map.addLayer(layer_DesaSleman_1);
function pop_sawahtadahhujan_2(feature, layer) {
	var popupContent =
		'<table>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' +
		(feature.properties["NAMOBJ"] !== null
			? autolinker.link(feature.properties["NAMOBJ"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["JNSSWH"] !== null
			? autolinker.link(feature.properties["JNSSWH"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FCODE"] !== null
			? autolinker.link(feature.properties["FCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["AQDATE"] !== null
			? autolinker.link(feature.properties["AQDATE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["PUDATE"] !== null
			? autolinker.link(feature.properties["PUDATE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["REMARK"] !== null
			? autolinker.link(feature.properties["REMARK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KODLCO"] !== null
			? autolinker.link(feature.properties["KODLCO"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SRS_ID"] !== null
			? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LCODE"] !== null
			? autolinker.link(feature.properties["LCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["METADATA"] !== null
			? autolinker.link(feature.properties["METADATA"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["TNMSWH"] !== null
			? autolinker.link(feature.properties["TNMSWH"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SHAPE_Leng"] !== null
			? autolinker.link(feature.properties["SHAPE_Leng"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SHAPE_Area"] !== null
			? autolinker.link(feature.properties["SHAPE_Area"].toLocaleString())
			: "") +
		"</td>\
                    </tr>\
                </table>";
	layer.bindPopup(popupContent, { maxHeight: 400 });
	var popup = layer.getPopup();
	var content = popup.getContent();
	var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
	popup.setContent(updatedContent);
}

function style_sawahtadahhujan_2_0() {
	return {
		pane: "pane_sawahtadahhujan_2",
		opacity: 1,
		color: "rgba(35,35,35,1.0)",
		dashArray: "",
		lineCap: "butt",
		lineJoin: "miter",
		weight: 1.0,
		fill: true,
		fillOpacity: 1,
		fillColor: "rgba(229,182,54,1.0)",
		interactive: true,
	};
}
map.createPane("pane_sawahtadahhujan_2");
map.getPane("pane_sawahtadahhujan_2").style.zIndex = 402;
map.getPane("pane_sawahtadahhujan_2").style["mix-blend-mode"] = "normal";
var layer_sawahtadahhujan_2 = new L.geoJson(json_sawahtadahhujan_2, {
	attribution: "",
	interactive: true,
	dataVar: "json_sawahtadahhujan_2",
	layerName: "layer_sawahtadahhujan_2",
	pane: "pane_sawahtadahhujan_2",
	onEachFeature: pop_sawahtadahhujan_2,
	style: style_sawahtadahhujan_2_0,
});
bounds_group.addLayer(layer_sawahtadahhujan_2);
map.addLayer(layer_sawahtadahhujan_2);
function pop_sawah_3(feature, layer) {
	var popupContent =
		'<table>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' +
		(feature.properties["NAMOBJ"] !== null
			? autolinker.link(feature.properties["NAMOBJ"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["JNSSWH"] !== null
			? autolinker.link(feature.properties["JNSSWH"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FCODE"] !== null
			? autolinker.link(feature.properties["FCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["AQDATE"] !== null
			? autolinker.link(feature.properties["AQDATE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["PUDATE"] !== null
			? autolinker.link(feature.properties["PUDATE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["REMARK"] !== null
			? autolinker.link(feature.properties["REMARK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KODLCO"] !== null
			? autolinker.link(feature.properties["KODLCO"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SRS_ID"] !== null
			? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LCODE"] !== null
			? autolinker.link(feature.properties["LCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["METADATA"] !== null
			? autolinker.link(feature.properties["METADATA"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["TNMSWH"] !== null
			? autolinker.link(feature.properties["TNMSWH"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SHAPE_Leng"] !== null
			? autolinker.link(feature.properties["SHAPE_Leng"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SHAPE_Area"] !== null
			? autolinker.link(feature.properties["SHAPE_Area"].toLocaleString())
			: "") +
		"</td>\
                    </tr>\
                </table>";
	layer.bindPopup(popupContent, { maxHeight: 400 });
	var popup = layer.getPopup();
	var content = popup.getContent();
	var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
	popup.setContent(updatedContent);
}

function style_sawah_3_0() {
	return {
		pane: "pane_sawah_3",
		opacity: 1,
		color: "rgba(128,14,16,1.0)",
		dashArray: "",
		lineCap: "butt",
		lineJoin: "miter",
		weight: 1.0,
		fill: true,
		fillOpacity: 1,
		fillColor: "rgba(221,214,81,1.0)",
		interactive: true,
	};
}
map.createPane("pane_sawah_3");
map.getPane("pane_sawah_3").style.zIndex = 403;
map.getPane("pane_sawah_3").style["mix-blend-mode"] = "normal";
var layer_sawah_3 = new L.geoJson(json_sawah_3, {
	attribution: "",
	interactive: true,
	dataVar: "json_sawah_3",
	layerName: "layer_sawah_3",
	pane: "pane_sawah_3",
	onEachFeature: pop_sawah_3,
	style: style_sawah_3_0,
});
bounds_group.addLayer(layer_sawah_3);
map.addLayer(layer_sawah_3);
function pop_pemerintahansleman_4(feature, layer) {
	var popupContent =
		'<table>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["OBJECTID"] !== null
			? autolinker.link(feature.properties["OBJECTID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' +
		(feature.properties["NAMOBJ"] !== null
			? autolinker.link(feature.properties["NAMOBJ"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FGSGOV"] !== null
			? autolinker.link(feature.properties["FGSGOV"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LUAS"] !== null
			? autolinker.link(feature.properties["LUAS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FCODE"] !== null
			? autolinker.link(feature.properties["FCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["REMARK"] !== null
			? autolinker.link(feature.properties["REMARK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SRS_ID"] !== null
			? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LCODE"] !== null
			? autolinker.link(feature.properties["LCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["METADATA"] !== null
			? autolinker.link(feature.properties["METADATA"].toLocaleString())
			: "") +
		"</td>\
                    </tr>\
                </table>";
	layer.bindPopup(popupContent, { maxHeight: 400 });
	var popup = layer.getPopup();
	var content = popup.getContent();
	var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
	popup.setContent(updatedContent);
}

function style_pemerintahansleman_4_0() {
	return {
		pane: "pane_pemerintahansleman_4",
		radius: 4.0,
		opacity: 1,
		color: "rgba(35,35,35,1.0)",
		dashArray: "",
		lineCap: "butt",
		lineJoin: "miter",
		weight: 1,
		fill: true,
		fillOpacity: 1,
		fillColor: "rgba(225,89,137,1.0)",
		interactive: true,
	};
}
map.createPane("pane_pemerintahansleman_4");
map.getPane("pane_pemerintahansleman_4").style.zIndex = 404;
map.getPane("pane_pemerintahansleman_4").style["mix-blend-mode"] = "normal";
var layer_pemerintahansleman_4 = new L.geoJson(json_pemerintahansleman_4, {
	attribution: "",
	interactive: true,
	dataVar: "json_pemerintahansleman_4",
	layerName: "layer_pemerintahansleman_4",
	pane: "pane_pemerintahansleman_4",
	onEachFeature: pop_pemerintahansleman_4,
	pointToLayer: function (feature, latlng) {
		var context = {
			feature: feature,
			variables: {},
		};
		return L.circleMarker(latlng, style_pemerintahansleman_4_0(feature));
	},
});
bounds_group.addLayer(layer_pemerintahansleman_4);
map.addLayer(layer_pemerintahansleman_4);
function pop_Sungai_5(feature, layer) {
	var popupContent =
		'<table>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' +
		(feature.properties["NAMOBJ"] !== null
			? autolinker.link(feature.properties["NAMOBJ"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["TIPSNG"] !== null
			? autolinker.link(feature.properties["TIPSNG"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KLSSNG"] !== null
			? autolinker.link(feature.properties["KLSSNG"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FCODE"] !== null
			? autolinker.link(feature.properties["FCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["REMARK"] !== null
			? autolinker.link(feature.properties["REMARK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SRS_ID"] !== null
			? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LCODE"] !== null
			? autolinker.link(feature.properties["LCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["METADATA"] !== null
			? autolinker.link(feature.properties["METADATA"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["NAMWS"] !== null
			? autolinker.link(feature.properties["NAMWS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["NAMDAS"] !== null
			? autolinker.link(feature.properties["NAMDAS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["STATUS"] !== null
			? autolinker.link(feature.properties["STATUS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WMAX"] !== null
			? autolinker.link(feature.properties["WMAX"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["DBTMAX"] !== null
			? autolinker.link(feature.properties["DBTMAX"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SLPRT"] !== null
			? autolinker.link(feature.properties["SLPRT"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SHAPE_Leng"] !== null
			? autolinker.link(feature.properties["SHAPE_Leng"].toLocaleString())
			: "") +
		"</td>\
                    </tr>\
                </table>";
	layer.bindPopup(popupContent, { maxHeight: 400 });
	var popup = layer.getPopup();
	var content = popup.getContent();
	var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
	popup.setContent(updatedContent);
}

function style_Sungai_5_0() {
	return {
		pane: "pane_Sungai_5",
		opacity: 1,
		color: "rgba(31,120,180,1.0)",
		dashArray: "",
		lineCap: "square",
		lineJoin: "bevel",
		weight: 1.0,
		fillOpacity: 0,
		interactive: true,
	};
}
map.createPane("pane_Sungai_5");
map.getPane("pane_Sungai_5").style.zIndex = 405;
map.getPane("pane_Sungai_5").style["mix-blend-mode"] = "normal";
var layer_Sungai_5 = new L.geoJson(json_Sungai_5, {
	attribution: "",
	interactive: true,
	dataVar: "json_Sungai_5",
	layerName: "layer_Sungai_5",
	pane: "pane_Sungai_5",
	onEachFeature: pop_Sungai_5,
	style: style_Sungai_5_0,
});
bounds_group.addLayer(layer_Sungai_5);
map.addLayer(layer_Sungai_5);
function pop_Jalan_6(feature, layer) {
	var popupContent =
		'<table>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["NAMRJL"] !== null
			? autolinker.link(feature.properties["NAMRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KONRJL"] !== null
			? autolinker.link(feature.properties["KONRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["MATRJL"] !== null
			? autolinker.link(feature.properties["MATRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FGSRJL"] !== null
			? autolinker.link(feature.properties["FGSRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["UTKRJL"] !== null
			? autolinker.link(feature.properties["UTKRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["TOLRJL"] !== null
			? autolinker.link(feature.properties["TOLRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["WLYRJL"] !== null
			? autolinker.link(feature.properties["WLYRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["AUTRJL"] !== null
			? autolinker.link(feature.properties["AUTRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KLSRJL"] !== null
			? autolinker.link(feature.properties["KLSRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SPCRJL"] !== null
			? autolinker.link(feature.properties["SPCRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["JPARJL"] !== null
			? autolinker.link(feature.properties["JPARJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["ARHRJL"] !== null
			? autolinker.link(feature.properties["ARHRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["STARJL"] !== null
			? autolinker.link(feature.properties["STARJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["KLLRJL"] !== null
			? autolinker.link(feature.properties["KLLRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["MEDRJL"] !== null
			? autolinker.link(feature.properties["MEDRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LOCRJL"] !== null
			? autolinker.link(feature.properties["LOCRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["JARRJL"] !== null
			? autolinker.link(feature.properties["JARRJL"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FCODE"] !== null
			? autolinker.link(feature.properties["FCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">REMARK</th>\
                        <td>' +
		(feature.properties["REMARK"] !== null
			? autolinker.link(feature.properties["REMARK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SRS_ID"] !== null
			? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LCODE"] !== null
			? autolinker.link(feature.properties["LCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["METADATA"] !== null
			? autolinker.link(feature.properties["METADATA"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SHAPE_Leng"] !== null
			? autolinker.link(feature.properties["SHAPE_Leng"].toLocaleString())
			: "") +
		"</td>\
                    </tr>\
                </table>";
	layer.bindPopup(popupContent, { maxHeight: 400 });
	var popup = layer.getPopup();
	var content = popup.getContent();
	var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
	popup.setContent(updatedContent);
}

function style_Jalan_6_0() {
	return {
		pane: "pane_Jalan_6",
		opacity: 1,
		color: "rgba(155,21,24,1.0)",
		dashArray: "",
		lineCap: "square",
		lineJoin: "bevel",
		weight: 1.0,
		fillOpacity: 0,
		interactive: true,
	};
}
map.createPane("pane_Jalan_6");
map.getPane("pane_Jalan_6").style.zIndex = 406;
map.getPane("pane_Jalan_6").style["mix-blend-mode"] = "normal";
var layer_Jalan_6 = new L.geoJson(json_Jalan_6, {
	attribution: "",
	interactive: true,
	dataVar: "json_Jalan_6",
	layerName: "layer_Jalan_6",
	pane: "pane_Jalan_6",
	onEachFeature: pop_Jalan_6,
	style: style_Jalan_6_0,
});
bounds_group.addLayer(layer_Jalan_6);
map.addLayer(layer_Jalan_6);
function pop_kantorkepaladesa_7(feature, layer) {
	var popupContent =
		'<table>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["OBJECTID"] !== null
			? autolinker.link(feature.properties["OBJECTID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' +
		(feature.properties["NAMOBJ"] !== null
			? autolinker.link(feature.properties["NAMOBJ"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FGSGOV"] !== null
			? autolinker.link(feature.properties["FGSGOV"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LUAS"] !== null
			? autolinker.link(feature.properties["LUAS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FCODE"] !== null
			? autolinker.link(feature.properties["FCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["REMARK"] !== null
			? autolinker.link(feature.properties["REMARK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SRS_ID"] !== null
			? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LCODE"] !== null
			? autolinker.link(feature.properties["LCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["METADATA"] !== null
			? autolinker.link(feature.properties["METADATA"].toLocaleString())
			: "") +
		"</td>\
                    </tr>\
                </table>";
	layer.bindPopup(popupContent, { maxHeight: 400 });
	var popup = layer.getPopup();
	var content = popup.getContent();
	var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
	popup.setContent(updatedContent);
}

function style_kantorkepaladesa_7_0() {
	return {
		pane: "pane_kantorkepaladesa_7",
		shape: "square",
		radius: 3.2,
		opacity: 1,
		color: "rgba(18,18,18,1.0)",
		dashArray: "",
		lineCap: "butt",
		lineJoin: "miter",
		weight: 2.0,
		fill: true,
		fillOpacity: 1,
		fillColor: "rgba(0,0,0,1.0)",
		interactive: true,
	};
}
map.createPane("pane_kantorkepaladesa_7");
map.getPane("pane_kantorkepaladesa_7").style.zIndex = 407;
map.getPane("pane_kantorkepaladesa_7").style["mix-blend-mode"] = "normal";
var layer_kantorkepaladesa_7 = new L.geoJson(json_kantorkepaladesa_7, {
	attribution: "",
	interactive: true,
	dataVar: "json_kantorkepaladesa_7",
	layerName: "layer_kantorkepaladesa_7",
	pane: "pane_kantorkepaladesa_7",
	onEachFeature: pop_kantorkepaladesa_7,
	pointToLayer: function (feature, latlng) {
		var context = {
			feature: feature,
			variables: {},
		};
		return L.shapeMarker(latlng, style_kantorkepaladesa_7_0(feature));
	},
});
bounds_group.addLayer(layer_kantorkepaladesa_7);
map.addLayer(layer_kantorkepaladesa_7);
function pop_kantorcamat_8(feature, layer) {
	var popupContent =
		'<table>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["OBJECTID"] !== null
			? autolinker.link(feature.properties["OBJECTID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' +
		(feature.properties["NAMOBJ"] !== null
			? autolinker.link(feature.properties["NAMOBJ"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FGSGOV"] !== null
			? autolinker.link(feature.properties["FGSGOV"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LUAS"] !== null
			? autolinker.link(feature.properties["LUAS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FCODE"] !== null
			? autolinker.link(feature.properties["FCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["REMARK"] !== null
			? autolinker.link(feature.properties["REMARK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SRS_ID"] !== null
			? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LCODE"] !== null
			? autolinker.link(feature.properties["LCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["METADATA"] !== null
			? autolinker.link(feature.properties["METADATA"].toLocaleString())
			: "") +
		"</td>\
                    </tr>\
                </table>";
	layer.bindPopup(popupContent, { maxHeight: 400 });
	var popup = layer.getPopup();
	var content = popup.getContent();
	var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
	popup.setContent(updatedContent);
}

function style_kantorcamat_8_0() {
	return {
		pane: "pane_kantorcamat_8",
		shape: "square",
		radius: 3.2,
		opacity: 1,
		color: "rgba(0,0,0,1.0)",
		dashArray: "",
		lineCap: "butt",
		lineJoin: "miter",
		weight: 2.0,
		fill: true,
		fillOpacity: 1,
		fillColor: "rgba(242,203,203,1.0)",
		interactive: true,
	};
}
map.createPane("pane_kantorcamat_8");
map.getPane("pane_kantorcamat_8").style.zIndex = 408;
map.getPane("pane_kantorcamat_8").style["mix-blend-mode"] = "normal";
var layer_kantorcamat_8 = new L.geoJson(json_kantorcamat_8, {
	attribution: "",
	interactive: true,
	dataVar: "json_kantorcamat_8",
	layerName: "layer_kantorcamat_8",
	pane: "pane_kantorcamat_8",
	onEachFeature: pop_kantorcamat_8,
	pointToLayer: function (feature, latlng) {
		var context = {
			feature: feature,
			variables: {},
		};
		return L.shapeMarker(latlng, style_kantorcamat_8_0(feature));
	},
});
bounds_group.addLayer(layer_kantorcamat_8);
map.addLayer(layer_kantorcamat_8);
function pop_KantorBupati_9(feature, layer) {
	var popupContent =
		'<table>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["OBJECTID"] !== null
			? autolinker.link(feature.properties["OBJECTID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' +
		(feature.properties["NAMOBJ"] !== null
			? autolinker.link(feature.properties["NAMOBJ"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FGSGOV"] !== null
			? autolinker.link(feature.properties["FGSGOV"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LUAS"] !== null
			? autolinker.link(feature.properties["LUAS"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["FCODE"] !== null
			? autolinker.link(feature.properties["FCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["REMARK"] !== null
			? autolinker.link(feature.properties["REMARK"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["SRS_ID"] !== null
			? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["LCODE"] !== null
			? autolinker.link(feature.properties["LCODE"].toLocaleString())
			: "") +
		'</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
		(feature.properties["METADATA"] !== null
			? autolinker.link(feature.properties["METADATA"].toLocaleString())
			: "") +
		"</td>\
                    </tr>\
                </table>";
	layer.bindPopup(popupContent, { maxHeight: 400 });
	var popup = layer.getPopup();
	var content = popup.getContent();
	var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
	popup.setContent(updatedContent);
}

function style_KantorBupati_9_0() {
	return {
		pane: "pane_KantorBupati_9",
		radius: 8.0,
		opacity: 1,
		color: "rgba(128,17,25,1.0)",
		dashArray: "",
		lineCap: "butt",
		lineJoin: "miter",
		weight: 2.0,
		fill: true,
		fillOpacity: 1,
		fillColor: "rgba(219,30,42,1.0)",
		interactive: true,
	};
}
map.createPane("pane_KantorBupati_9");
map.getPane("pane_KantorBupati_9").style.zIndex = 409;
map.getPane("pane_KantorBupati_9").style["mix-blend-mode"] = "normal";
var layer_KantorBupati_9 = new L.geoJson(json_KantorBupati_9, {
	attribution: "",
	interactive: true,
	dataVar: "json_KantorBupati_9",
	layerName: "layer_KantorBupati_9",
	pane: "pane_KantorBupati_9",
	onEachFeature: pop_KantorBupati_9,
	pointToLayer: function (feature, latlng) {
		var context = {
			feature: feature,
			variables: {},
		};
		return L.circleMarker(latlng, style_KantorBupati_9_0(feature));
	},
});
bounds_group.addLayer(layer_KantorBupati_9);
map.addLayer(layer_KantorBupati_9);
var osmGeocoder = new L.Control.Geocoder({
	collapsed: true,
	position: "topleft",
	text: "Search",
	title: "Testing",
}).addTo(map);
document.getElementsByClassName("leaflet-control-geocoder-icon")[0].className +=
	" fa fa-search";
document.getElementsByClassName("leaflet-control-geocoder-icon")[0].title +=
	"Search for a place";
var baseMaps = {};
L.control
	.layers(
		baseMaps,
		{
			'<img style="width: 50px" src="../img/KantorBupati_9.png" /> Kantor Bupati':
				layer_KantorBupati_9,
			'<img style="width: 50px" src="../img/kantorcamat_8.png" /> kantor camat':
				layer_kantorcamat_8,
			'<img style="width: 50px" src="../img/kantorkepaladesa_7.png" /> kantor kepala desa':
				layer_kantorkepaladesa_7,
			'<img style="width: 50px" src="../img/Jalan_6.png" /> Jalan':
				layer_Jalan_6,
			'<img style="width: 50px" src="../img/Sungai_5.png" /> Sungai':
				layer_Sungai_5,
			'<img style="width: 50px" src="../img/pemerintahansleman_4.png" /> pemerintahan sleman':
				layer_pemerintahansleman_4,
			'<img style="width: 50px" src="../img/sawah_3.png" /> sawah':
				layer_sawah_3,
			'<img style="width: 50px" src="../img/sawahtadahhujan_2.png" /> sawah tadah hujan':
				layer_sawahtadahhujan_2,
			'<img style="width: 50px" src="../img/DesaSleman_1.png" /> Desa Sleman':
				layer_DesaSleman_1,
			"OSM Standard": layer_OSMStandard_0,
		},
		{ collapsed: true }
	)
	.addTo(map);
setBounds();
var i = 0;
layer_DesaSleman_1.eachLayer(function (layer) {
	var context = {
		feature: layer.feature,
		variables: {},
	};
	layer.bindTooltip(
		layer.feature.properties["NAMOBJ"] !== null
			? String(
					"<div style=\"color: #323232; font-size: 8pt; font-family: 'Open Sans', sans-serif;\">" +
						layer.feature.properties["NAMOBJ"]
			  ) + "</div>"
			: "",
		{ permanent: true, offset: [-0, -16], className: "css_DesaSleman_1" }
	);
	labels.push(layer);
	totalMarkers += 1;
	layer.added = true;
	addLabel(layer, i);
	i++;
});
resetLabels([layer_DesaSleman_1]);
map.on("zoomend", function () {
	resetLabels([layer_DesaSleman_1]);
});
map.on("layeradd", function () {
	resetLabels([layer_DesaSleman_1]);
});
map.on("layerremove", function () {
	resetLabels([layer_DesaSleman_1]);
});
