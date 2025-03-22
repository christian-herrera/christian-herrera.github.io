;======================> INICIO AUTOMÁTICO (Chris)
G28                  ; Home
G90                  ; Coordenadas Absolutas
G0 X10 Y10 Z15       ; Muevo a (10, 10, 15)


;Configuraciones de la Retracción por Firmware
M207 Z0 F2400 S4  ; 40mm/s	
M208 Z0 F2400 S0  ; 40mm/s

;Deshabilito la Retracción por Firmware
;Esto porque la retracción la realizo con los
;comandos G10/G11. Si se habilita, entonces Marlin
;intentara hacer retracciones cuando vea los G1 E-X,
;es decir, cuando retraiga por gcode.
M209 S0


M117 Impresora Lista...
;======================> INICIO AUTOMÁTICO (Chris)