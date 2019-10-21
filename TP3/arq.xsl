<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
        <html>
            <head>
                <meta charset="UTF8" />
                <title>Arqueossítios do Nordeste Português</title>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <style>
                    .w3-ul{list-style-type:decimal;padding:0;margin-left:3em;margin-top:2em}
                    .center{
                    text-align: center;
                    }
                    .bottom-one{
                    margin-bottom: 1cm;
                    }
                </style>
            </head>
            <body>
                <h1 class="center"><b>Arqueossítios do Nordeste Português</b></h1>
                <div class="w3-container ">
                    <h3><b>Índice de Arqueossítios:</b></h3>
                    <ul class="w3-ul w3-hoverable bottom-one">
                        <xsl:apply-templates mode="indice" />
                    </ul>
                </div>
            </body>
        </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
  
    <xsl:template match="ARQELEM" mode="indice">
        <ul>
            <li id="{generate-id()}">
                <a href="{generate-id()}.html"><xsl:value-of select="IDENTI"/></a>
            </li>
        </ul>
    </xsl:template>
    
    
    <xsl:template match="ARQELEM"  >
        <xsl:result-document href="website/{generate-id()}.html">
            <html>
              <head>
                <title> <xsl:value-of select="IDENTI"/></title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <style>
                    table {
                    border-collapse: collapse;
                    }
                    
                    th,tr {
                    padding: 10px;
                    text-align: left;
                    border-bottom: 1px solid pink;
                    }
                </style>
              </head>
                
              <body>
                  <div class="w3-container">
                      <h1> <xsl:value-of select="IDENTI"/></h1>
                      <address style="text-align:center">
                          <a href="index.html#{generate-id()}">Voltar à Página Inicial</a>
                      </address>
                      <table>
                          <tr>
                              <th>Tipo:</th><td><xsl:value-of select="TIPO/@ASSUNTO"/></td>
                          </tr>
                          
                          <xsl:choose>
                              <xsl:when test="CRONO">
                                  <tr>
                                      <th>Cronologia:</th><td><xsl:value-of select="CRONO"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <tr>
                              <th>Lugar:</th><td><xsl:value-of select="LUGAR"/></td>
                          </tr>
                          <tr>
                              <th>Freguesia:</th><td><xsl:value-of select="FREGUE"/></td>
                          </tr>
                          <tr>
                              <th>Conselho:</th><td><xsl:value-of select="CONCEL"/></td>
                          </tr>
                          
                          <xsl:choose>
                              <xsl:when test="LATITU">
                                  <tr>
                                      <th>Latitude:</th><td><xsl:value-of select="LATITU"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <xsl:choose>
                              <xsl:when test="LONGIT">
                                  <tr>
                                      <th>Longitude:</th><td><xsl:value-of select="LONGIT"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <xsl:choose>
                              <xsl:when test="ALTITU">
                                  <tr>
                                      <th>Altitude:</th><td><xsl:value-of select="ALTITU"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <tr>
                              <th>Descrição:</th><td><xsl:value-of select="DESCRI"/></td>
                          </tr>
                          
                          <xsl:choose>
                              <xsl:when test="ACESSO">
                                  <tr>
                                      <th>Acesso:</th><td><xsl:value-of select="ACESSO"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <xsl:choose>
                              <xsl:when test="QUADRO">
                                  <tr>
                                      <th>Quadro:</th><td><xsl:value-of select="QUADRO"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <xsl:choose>
                              <xsl:when test="TRAARQ">
                                  <tr>
                                      <th>Trabalhos no Arqueossítio:</th><td><xsl:value-of select="TRAARQ"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <tr>
                              <th>Descrição do Arqueossítio:</th><td><xsl:value-of select="DESARQ"/></td>
                          </tr>
                          
                          <xsl:choose>
                              <xsl:when test="INTERP">
                                  <tr>
                                      <th>Interp:</th><td><xsl:value-of select="INTERP"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <xsl:choose>
                              <xsl:when test="DEPOSI">
                                  <tr>
                                      <th>Depósito:</th><td><xsl:value-of select="DEPOSI"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <xsl:choose>
                              <xsl:when test="INTERE">
                                  <tr>
                                      <th>Interesse:</th><td><xsl:value-of select="INTERE"/></td>
                                  </tr>
                              </xsl:when>
                          </xsl:choose>
                          
                          <tr>
                              <th>Bibliografia:</th><td><xsl:value-of select="BIBLIO"/></td>
                          </tr>
                          <tr>
                              <th>Autor:</th><td><xsl:value-of select="AUTOR"/></td>
                          </tr>
                          <tr>
                              <th>Data:</th><td><xsl:value-of select="DATA"/></td>
                          </tr>
                      </table>
                    
                      
                  </div>
              </body>  
               
            </html>
        </xsl:result-document>
    </xsl:template>
    
    
    
</xsl:stylesheet>