(function() {
  var create_date, create_exponential_points, create_random_points2, create_squared_points, draw_bars;
  create_date = function(day) {
    var d;
    d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), day + 1);
  };
  create_exponential_points = function() {
    var i, _results;
    _results = [];
    for (i = 0; i <= 25; i++) {
      _results.push([create_date(i), i * 4.]);
    }
    return _results;
  };
  create_squared_points = function() {
    var i, _results;
    _results = [];
    for (i = 0; i <= 25; i++) {
      _results.push([create_date(i), i * (i - 1)]);
    }
    return _results;
  };
  create_random_points2 = function() {
    var i, _results;
    _results = [];
    for (i = 0; i <= 25; i++) {
      _results.push([create_date(i), Math.random() * i]);
    }
    return _results;
  };
  draw_bars = function(r, points) {
    var attach_handler, i, point, rect, x, _len, _results;
    attach_handler = function(element) {
      element.mouseover(function() {
        return element.attr({
          "fill": "#333"
        });
      });
      return element.mouseout(function() {
        return element.attr({
          "fill": "#00aadd"
        });
      });
    };
    x = points[0].x;
    _results = [];
    for (i = 0, _len = points.length; i < _len; i++) {
      point = points[i];
      rect = r.rect(x - 15, point.y, 15, 300 - point.y);
      x += 16;
      rect.attr({
        "fill": "#00aadd",
        "stroke": "transparent",
        "stroke-width": "0"
      });
      attach_handler(rect);
      _results.push(new Charts.Tooltip(r, rect, Math.floor(points[i].y)));
    }
    return _results;
  };
  window.onload = function() {
    var c, charts, colors, conversions_chart, data, data_pair, i, result, signups_chart, sparkline_options, visitors_chart, x, y, yvals, _i, _len, _len2, _ref, _ref2;
    charts = Charts;
    c = new Charts.LineChart('chart1', {
      show_grid: true
    });
    c.add_line({
      data: create_exponential_points(),
      options: {
        line_color: "#55bb00",
        area_color: "#55bb00",
        dot_color: "#55bb00"
      }
    });
    c.add_line({
      data: create_squared_points()
    });
    c.draw();
    c = new Charts.LineChart('chart2', {
      line_color: "#118800",
      dot_color: "#118800",
      area_color: "#118800",
      dot_stroke_color: "#aaa",
      dot_stroke_size: 3,
      label_min: false,
      smoothing: 0.5,
      show_grid: true
    });
    c.add_line({
      data: create_random_points2()
    });
    c.draw();
    c = new Charts.LineChart('chart4', {
      line_color: "#9900cc",
      dot_color: "#000",
      dot_size: 7,
      dot_stroke_color: "#9900cc",
      dot_stroke_size: 2,
      label_min: true,
      label_max: false,
      show_y_labels: false,
      fill_area: false,
      smoothing: 0
    });
    c.add_line({
      data: create_random_points2()
    });
    c.draw();
    sparkline_options = {
      show_x_labels: false,
      show_y_labels: false,
      show_grid: false,
      smoothing: 0,
      label_min: false,
      label_max: false,
      dot_size: 0,
      x_padding: 10,
      y_padding: 5,
      line_color: "#00bbee",
      area_color: "#00bbee"
    };
    visitors_chart = new Charts.LineChart('sparkline-visitors', sparkline_options);
    visitors_chart.add_line({
      data: create_random_points2()
    });
    visitors_chart.draw();
    signups_chart = new Charts.LineChart('sparkline-signups', sparkline_options);
    signups_chart.add_line({
      data: create_random_points2(),
      options: {
        line_color: "#0066cc",
        area_color: "#0066cc",
        dot_color: "#0066cc"
      }
    });
    signups_chart.draw();
    conversions_chart = new Charts.LineChart('sparkline-conversions', sparkline_options);
    conversions_chart.add_line({
      data: create_random_points2(),
      options: {
        line_color: "#002299",
        area_color: "#002299",
        dot_color: "#002299"
      }
    });
    conversions_chart.draw();
    data = {
      "result": [
        {
          "data": [[1321492200000, 55993064.00], [1321492800000, 56000056.00], [1321493400000, 56001896.00], [1321494000000, 56005672.00], [1321494600000, 56005672.00], [1321495200000, 56005792.00], [1321495800000, 56005792.00], [1321496400000, 56005840.00], [1321497000000, 56005944.00], [1321497600000, 56005944.00], [1321498200000, 56010688.00], [1321498800000, 56395032.00], [1321499400000, 56117136.00], [1321500000000, 56117656.00], [1321500600000, 56117656.00], [1321501200000, 56120112.00], [1321501800000, 56120160.00], [1321502400000, 56120336.00], [1321503000000, 56122312.00], [1321503600000, 56122496.00], [1321504200000, 56127616.00], [1321504800000, 56129408.00], [1321505400000, 56129408.00], [1321506000000, 56129640.00], [1321506600000, 56138608.00], [1321507200000, 56138704.00], [1321507800000, 56139656.00], [1321508400000, 56154440.00], [1321509000000, 56154576.00], [1321509600000, 56154632.00], [1321510200000, 56163912.00], [1321510800000, 56167320.00], [1321511400000, 56168408.00], [1321512000000, 56174360.00], [1321512600000, 56174360.00], [1321513200000, 56177504.00], [1321513800000, 56207888.00], [1321514400000, 56244296.00], [1321515000000, 56259592.00], [1321515600000, 56261040.00], [1321516200000, 56261336.00], [1321516800000, 56261576.00], [1321517400000, 56262144.00], [1321518000000, 56265656.00], [1321518600000, 56265928.00], [1321519200000, 56266160.00], [1321519800000, 56164784.00], [1321520400000, 56168936.00], [1321521000000, 56169176.00], [1321521600000, 56169280.00], [1321522200000, 56169664.00], [1321522800000, 56170024.00], [1321523400000, 56171320.00], [1321524000000, 56173328.00], [1321524600000, 56173608.00], [1321525200000, 56173728.00], [1321525800000, 56174240.00], [1321526400000, 56174656.00], [1321527000000, 56174848.00], [1321527600000, 56180760.00], [1321528200000, 56180992.00], [1321528800000, 56181312.00], [1321529400000, 56185312.00], [1321530000000, 56189176.00], [1321530600000, 56192832.00], [1321531200000, 56200176.00], [1321531800000, 56202904.00], [1321532400000, 56203176.00], [1321533000000, 56203296.00], [1321533600000, 56205008.00], [1321534200000, 56205432.00], [1321534800000, 56213392.00], [1321535400000, 56213392.00], [1321536000000, 56105000.00], [1321536600000, 56125144.00], [1321537200000, 56125208.00], [1321537800000, 56125264.00], [1321538400000, 56279832.00], [1321539000000, 56286136.00], [1321539600000, 56292400.00], [1321540200000, 56299088.00], [1321540800000, 56301064.00], [1321541400000, 56311224.00], [1321542000000, 56318064.00], [1321542600000, 56318144.00], [1321543200000, 56318264.00], [1321543800000, 56318264.00], [1321544400000, 56250888.00], [1321545000000, 56250992.00], [1321545600000, 56253968.00], [1321546200000, 56258952.00], [1321546800000, 56258952.00], [1321547400000, 56262744.00], [1321548000000, 56277928.00], [1321548600000, 56277960.00], [1321549200000, 56278920.00], [1321549800000, 56278984.00], [1321550400000, 56279032.00], [1321551000000, 56279160.00], [1321551600000, 56291624.00], [1321552200000, 56291624.00], [1321552800000, 56301432.00], [1321553400000, 56303848.00], [1321554000000, 56303848.00], [1321554600000, 56303992.00], [1321555200000, 56310296.00], [1321555800000, 56312304.00], [1321556400000, 56320656.00], [1321557000000, 56320704.00], [1321557600000, 56320704.00], [1321558200000, 56323624.00], [1321558800000, 56323624.00], [1321559400000, 56278128.00], [1321560000000, 56281112.00], [1321560600000, 56281168.00], [1321561200000, 56281168.00], [1321561800000, 56288232.00], [1321562400000, 56288232.00], [1321563000000, 56298216.00], [1321563600000, 56299184.00], [1321564200000, 56300832.00], [1321564800000, 56301088.00], [1321565400000, 56301456.00], [1321566000000, 56307104.00], [1321566600000, 56314952.00], [1321567200000, 56315864.00], [1321567800000, 56315864.00], [1321568400000, 56315968.00], [1321569000000, 56321824.00], [1321569600000, 56321824.00], [1321570200000, 56321872.00], [1321570800000, 56321976.00], [1321571400000, 56328208.00], [1321572000000, 56332040.00], [1321572600000, 56335400.00], [1321573200000, 56335520.00], [1321573800000, 56335624.00], [1321574400000, 56335856.00], [1321575000000, 56335856.00], [1321575600000, 56335856.00], [1321576200000, 56335904.00], [1321576800000, 56335904.00], [1321577400000, 56335904.00], [1321578000000, 56341832.00]]
        }, {
          "data": [[1321492200000, 55613560.00], [1321492800000, 55613560.00], [1321493400000, 55618616.00], [1321494000000, 55618672.00], [1321494600000, 55618704.00], [1321495200000, 55618704.00], [1321495800000, 55618816.00], [1321496400000, 55618888.00], [1321497000000, 55618888.00], [1321497600000, 55618888.00], [1321498200000, 55618944.00], [1321498800000, 55698448.00], [1321499400000, 55698448.00], [1321500000000, 55698496.00], [1321500600000, 55698552.00], [1321501200000, 55698600.00], [1321501800000, 55698600.00], [1321502400000, 55698600.00], [1321503000000, 55698600.00], [1321503600000, 55698600.00], [1321504200000, 55698600.00], [1321504800000, 55698648.00], [1321505400000, 55698648.00], [1321506000000, 55705496.00], [1321506600000, 55705496.00], [1321507200000, 55708720.00], [1321507800000, 55709688.00], [1321508400000, 55709688.00], [1321509000000, 55709688.00], [1321509600000, 55709736.00], [1321510200000, 55709856.00], [1321510800000, 55709192.00], [1321511400000, 55709192.00], [1321512000000, 55717504.00], [1321512600000, 55717576.00], [1321513200000, 55717576.00], [1321513800000, 55717624.00], [1321514400000, 55717680.00], [1321515000000, 55717680.00], [1321515600000, 55717728.00], [1321516200000, 55717728.00], [1321516800000, 55717728.00], [1321517400000, 55687456.00], [1321518000000, 55687600.00], [1321518600000, 55687704.00], [1321519200000, 55690352.00], [1321519800000, 55690400.00], [1321520400000, 55690464.00], [1321521000000, 55690616.00], [1321521600000, 55690672.00], [1321522200000, 55690672.00], [1321522800000, 55690736.00], [1321523400000, 55690736.00], [1321524000000, 55690736.00], [1321524600000, 55614448.00], [1321525200000, 55614832.00], [1321525800000, 55615440.00], [1321526400000, 55615904.00], [1321527000000, 55616152.00], [1321527600000, 55616488.00], [1321528200000, 55616928.00], [1321528800000, 55617320.00], [1321529400000, 55617560.00], [1321530000000, 55617864.00], [1321530600000, 55619808.00], [1321531200000, 55621264.00], [1321531800000, 55621504.00], [1321532400000, 55623376.00], [1321533000000, 55623736.00], [1321533600000, 55625616.00], [1321534200000, 55625840.00], [1321534800000, 55625960.00], [1321535400000, 55627464.00], [1321536000000, 55627712.00], [1321536600000, 55628048.00], [1321537200000, 55660992.00], [1321537800000, 55661248.00], [1321538400000, 55661576.00], [1321539000000, 55662448.00], [1321539600000, 55662552.00], [1321540200000, 55669392.00], [1321540800000, 55784736.00], [1321541400000, 55799464.00], [1321542000000, 55803008.00], [1321542600000, 55803152.00], [1321543200000, 55803264.00], [1321543800000, 55805736.00], [1321544400000, 55807016.00], [1321545000000, 55807032.00], [1321545600000, 55818720.00], [1321546200000, 55829120.00], [1321546800000, 55831680.00], [1321547400000, 55832544.00], [1321548000000, 55832592.00], [1321548600000, 55834792.00], [1321549200000, 55834912.00], [1321549800000, 55837456.00], [1321550400000, 55837456.00], [1321551000000, 55888520.00], [1321551600000, 55899936.00], [1321552200000, 55906376.00], [1321552800000, 55909552.00], [1321553400000, 55909552.00], [1321554000000, 55915480.00], [1321554600000, 55925248.00], [1321555200000, 55926216.00], [1321555800000, 55926216.00], [1321556400000, 55926288.00], [1321557000000, 55926344.00], [1321557600000, 55935848.00], [1321558200000, 55935904.00], [1321558800000, 55936016.00], [1321559400000, 55936016.00], [1321560000000, 55941576.00], [1321560600000, 55948656.00], [1321561200000, 55852672.00], [1321561800000, 55852832.00], [1321562400000, 55852976.00], [1321563000000, 55853432.00], [1321563600000, 55853488.00], [1321564200000, 55853584.00], [1321564800000, 55855248.00], [1321565400000, 55855304.00], [1321566000000, 55787448.00], [1321566600000, 55787504.00], [1321567200000, 55787568.00], [1321567800000, 55787568.00], [1321568400000, 55789568.00], [1321569000000, 55789568.00], [1321569600000, 55789568.00], [1321570200000, 55789568.00], [1321570800000, 55789624.00], [1321571400000, 55789680.00], [1321572000000, 55789728.00], [1321572600000, 55789880.00], [1321573200000, 55790920.00], [1321573800000, 55793008.00], [1321574400000, 55793008.00], [1321575000000, 55795040.00], [1321575600000, 55795040.00], [1321576200000, 55795040.00], [1321576800000, 55808496.00], [1321577400000, 55808544.00], [1321578000000, 55622824.00]]
        }, {
          "data": [[1321492200000, 55770816.00], [1321492800000, 55770816.00], [1321493400000, 55770816.00], [1321494000000, 55792512.00], [1321494600000, 55814064.00], [1321495200000, 55819008.00], [1321495800000, 55829552.00], [1321496400000, 55830376.00], [1321497000000, 55833600.00], [1321497600000, 55833704.00], [1321498200000, 55833800.00], [1321498800000, 55926560.00], [1321499400000, 55926616.00], [1321500000000, 55926840.00], [1321500600000, 55926952.00], [1321501200000, 55927008.00], [1321501800000, 55927128.00], [1321502400000, 55927288.00], [1321503000000, 55927288.00], [1321503600000, 55927840.00], [1321504200000, 55927840.00], [1321504800000, 55927888.00], [1321505400000, 55927888.00], [1321506000000, 55928824.00], [1321506600000, 55928888.00], [1321507200000, 55928944.00], [1321507800000, 55929000.00], [1321508400000, 55929056.00], [1321509000000, 55929104.00], [1321509600000, 55929160.00], [1321510200000, 55932416.00], [1321510800000, 55937344.00], [1321511400000, 55938416.00], [1321512000000, 55938416.00], [1321512600000, 55940920.00], [1321513200000, 55942904.00], [1321513800000, 55942952.00], [1321514400000, 55942952.00], [1321515000000, 55943072.00], [1321515600000, 55944736.00], [1321516200000, 55944736.00], [1321516800000, 55948856.00], [1321517400000, 55948904.00], [1321518000000, 55951832.00], [1321518600000, 55951832.00], [1321519200000, 55953048.00], [1321519800000, 55953096.00], [1321520400000, 55953144.00], [1321521000000, 55953200.00], [1321521600000, 55953200.00], [1321522200000, 55953200.00], [1321522800000, 55748056.00], [1321523400000, 55749032.00], [1321524000000, 55719528.00], [1321524600000, 55719576.00], [1321525200000, 55719592.00], [1321525800000, 55719592.00], [1321526400000, 55719592.00], [1321527000000, 55719656.00], [1321527600000, 55719712.00], [1321528200000, 55719712.00], [1321528800000, 55719712.00], [1321529400000, 55713760.00], [1321530000000, 55713760.00], [1321530600000, 55713760.00], [1321531200000, 55713760.00], [1321531800000, 55713808.00], [1321532400000, 55721632.00], [1321533000000, 55721680.00], [1321533600000, 55722704.00], [1321534200000, 55743640.00], [1321534800000, 55743688.00], [1321535400000, 55744024.00], [1321536000000, 55751104.00], [1321536600000, 55751136.00], [1321537200000, 55751136.00], [1321537800000, 55751184.00], [1321538400000, 55751288.00], [1321539000000, 55751288.00], [1321539600000, 55762920.00], [1321540200000, 55762920.00], [1321540800000, 55762920.00], [1321541400000, 55764000.00], [1321542000000, 55764000.00], [1321542600000, 55764000.00], [1321543200000, 55764048.00], [1321543800000, 55764104.00], [1321544400000, 55773608.00], [1321545000000, 55773664.00], [1321545600000, 55773664.00], [1321546200000, 55773728.00], [1321546800000, 55773840.00], [1321547400000, 55773840.00], [1321548000000, 55773840.00], [1321548600000, 55773888.00], [1321549200000, 55773960.00], [1321549800000, 55774072.00], [1321550400000, 55774072.00], [1321551000000, 55774176.00], [1321551600000, 55774176.00], [1321552200000, 55774176.00], [1321552800000, 55774224.00], [1321553400000, 55774336.00], [1321554000000, 55774336.00], [1321554600000, 55774400.00], [1321555200000, 55774464.00], [1321555800000, 55774464.00], [1321556400000, 55774520.00], [1321557000000, 55774520.00], [1321557600000, 55774520.00], [1321558200000, 55774576.00], [1321558800000, 55774632.00], [1321559400000, 55774896.00], [1321560000000, 55778928.00], [1321560600000, 55781784.00], [1321561200000, 55785816.00], [1321561800000, 55785872.00], [1321562400000, 55785872.00], [1321563000000, 55785872.00], [1321563600000, 55785920.00], [1321564200000, 55791168.00], [1321564800000, 55791264.00], [1321565400000, 55791336.00], [1321566000000, 55791392.00], [1321566600000, 55791392.00], [1321567200000, 55791392.00], [1321567800000, 55791448.00], [1321568400000, 55791448.00], [1321569000000, 55791448.00], [1321569600000, 55791544.00], [1321570200000, 55791600.00], [1321570800000, 55798800.00], [1321571400000, 55798800.00], [1321572000000, 55798944.00], [1321572600000, 55798944.00], [1321573200000, 55798944.00], [1321573800000, 55798944.00], [1321574400000, 55798944.00], [1321575000000, 55798992.00], [1321575600000, 55680744.00], [1321576200000, 55680744.00], [1321576800000, 55680744.00], [1321577400000, 55680744.00], [1321578000000, 55131536.00]]
        }, {
          "data": [[1321492200000, 55157208.00], [1321492800000, 55157336.00], [1321493400000, 55157336.00], [1321494000000, 55163152.00], [1321494600000, 55163208.00], [1321495200000, 55163272.00], [1321495800000, 55163272.00], [1321496400000, 55163272.00], [1321497000000, 55170168.00], [1321497600000, 55171080.00], [1321498200000, 55173648.00], [1321498800000, 55253864.00], [1321499400000, 55253864.00], [1321500000000, 55253944.00], [1321500600000, 55255144.00], [1321501200000, 55255144.00], [1321501800000, 55256232.00], [1321502400000, 55256304.00], [1321503000000, 55256304.00], [1321503600000, 55256368.00], [1321504200000, 55256368.00], [1321504800000, 55256368.00], [1321505400000, 55256792.00], [1321506000000, 55256792.00], [1321506600000, 55256792.00], [1321507200000, 55256792.00], [1321507800000, 55256792.00], [1321508400000, 55256792.00], [1321509000000, 55256848.00], [1321509600000, 55256848.00], [1321510200000, 55256848.00], [1321510800000, 55256848.00], [1321511400000, 55256848.00], [1321512000000, 55256848.00], [1321512600000, 55268040.00], [1321513200000, 55268128.00], [1321513800000, 55268128.00], [1321514400000, 55268176.00], [1321515000000, 55268176.00], [1321515600000, 55268176.00], [1321516200000, 55268224.00], [1321516800000, 55268224.00], [1321517400000, 55268224.00], [1321518000000, 55268224.00], [1321518600000, 55268224.00], [1321519200000, 55268224.00], [1321519800000, 55268288.00], [1321520400000, 55268288.00], [1321521000000, 55268288.00], [1321521600000, 55268336.00], [1321522200000, 55268472.00], [1321522800000, 55268472.00], [1321523400000, 55268472.00], [1321524000000, 55270192.00], [1321524600000, 55270192.00], [1321525200000, 55270192.00], [1321525800000, 55270192.00], [1321526400000, 55270240.00], [1321527000000, 55270240.00], [1321527600000, 55270240.00], [1321528200000, 55270288.00], [1321528800000, 55270360.00], [1321529400000, 55270360.00], [1321530000000, 55270528.00], [1321530600000, 55270528.00], [1321531200000, 55270528.00], [1321531800000, 55270608.00], [1321532400000, 55277792.00], [1321533000000, 55277968.00], [1321533600000, 55277968.00], [1321534200000, 55278136.00], [1321534800000, 55278296.00], [1321535400000, 55278296.00], [1321536000000, 55278296.00], [1321536600000, 55278480.00], [1321537200000, 55278536.00], [1321537800000, 55278584.00], [1321538400000, 55278696.00], [1321539000000, 55278696.00], [1321539600000, 55278696.00], [1321540200000, 55278752.00], [1321540800000, 55278752.00], [1321541400000, 55278808.00], [1321542000000, 55278808.00], [1321542600000, 55278808.00], [1321543200000, 55279632.00], [1321543800000, 55279824.00], [1321544400000, 55279824.00], [1321545000000, 55279824.00], [1321545600000, 55279904.00], [1321546200000, 55280016.00], [1321546800000, 55280016.00], [1321547400000, 55280072.00], [1321548000000, 55290888.00], [1321548600000, 55314200.00], [1321549200000, 55336408.00], [1321549800000, 55348440.00], [1321550400000, 55351920.00], [1321551000000, 55353776.00], [1321551600000, 55369072.00], [1321552200000, 55377840.00], [1321552800000, 55228728.00], [1321553400000, 55228728.00], [1321554000000, 55230712.00], [1321554600000, 55230896.00], [1321555200000, 55230896.00], [1321555800000, 55232552.00], [1321556400000, 55235840.00], [1321557000000, 55244752.00], [1321557600000, 55244752.00], [1321558200000, 55244904.00], [1321558800000, 55247000.00], [1321559400000, 55260752.00], [1321560000000, 55260856.00], [1321560600000, 55322392.00], [1321561200000, 55337392.00], [1321561800000, 55337392.00], [1321562400000, 55337392.00], [1321563000000, 55337552.00], [1321563600000, 55338304.00], [1321564200000, 55346256.00], [1321564800000, 55346256.00], [1321565400000, 55346304.00], [1321566000000, 55352576.00], [1321566600000, 55359872.00], [1321567200000, 55362848.00], [1321567800000, 55364056.00], [1321568400000, 55364232.00], [1321569000000, 55364352.00], [1321569600000, 55364352.00], [1321570200000, 55367424.00], [1321570800000, 55367608.00], [1321571400000, 55367704.00], [1321572000000, 55367896.00], [1321572600000, 55373928.00], [1321573200000, 55373928.00], [1321573800000, 55374040.00], [1321574400000, 55374080.00], [1321575000000, 55374080.00], [1321575600000, 55383552.00], [1321576200000, 55383552.00], [1321576800000, 55383552.00], [1321577400000, 55383608.00], [1321578000000, 55383608.00]]
        }
      ]
    };
    colors = ["#00aadd", "#ffee33", "#ff3366", "#00cc33"];
    c = new Charts.LineChart('lotsofdata', {
      show_grid: true,
      label_format: "%I:%M %p",
      x_label_size: 11,
      show_y_labels: true,
      y_label_size: 11,
      smoothing: 1,
      max_x_labels: 5,
      max_y_labels: 10,
      x_padding: 50
    });
    _ref = data["result"];
    for (i = 0, _len = _ref.length; i < _len; i++) {
      result = _ref[i];
      yvals = [];
      _ref2 = result["data"];
      for (_i = 0, _len2 = _ref2.length; _i < _len2; _i++) {
        data_pair = _ref2[_i];
        x = data_pair[0], y = data_pair[1];
        yvals.push([new Date(x), y]);
      }
      c.add_line({
        data: yvals,
        options: {
          line_color: colors[i % colors.length],
          dot_color: colors[i % colors.length],
          area_color: colors[i % colors.length],
          area_opacity: 0.3,
          dot_size: 0,
          label_min: false,
          label_max: false
        }
      });
    }
    return c.draw();
  };
}).call(this);
